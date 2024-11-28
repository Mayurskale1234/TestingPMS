import { NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

// Define a typed interface for the contact response
interface Contact {
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
}

export async function GET() {
  // Verify environment variable exists with more explicit type checking
  if (!process.env.HUBSPOT_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "HubSpot access token is not configured" }, 
      { status: 401 }
    );
  }

  try {
    // Create HubSpot client
    const hubspotClient = new Client({
      accessToken: process.env.HUBSPOT_ACCESS_TOKEN
    });

    // Fetch contacts with type-safe mapping
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage();
    
    const contacts: Contact[] = apiResponse.results.map((contact) => ({
      id: contact.id,
      firstname: contact.properties.firstname || null,
      lastname: contact.properties.lastname || null,
      email: contact.properties.email || null,
    }));

    return NextResponse.json(contacts);
  } catch (error) {
    // More robust error handling
    console.error('HubSpot API Error:', error);
    
    return NextResponse.json(
      { 
        error: "Failed to fetch contacts",
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
}