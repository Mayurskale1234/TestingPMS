import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Define the structure of the HubSpot contact webhook payload
interface HubSpotContactWebhookPayload {
  objectId: string;
  properties: {
    firstname?: { value: string };
    lastname?: { value: string };
    email?: { value: string };
  };
  eventType: 'create' | 'update' | 'delete';
}

export async function POST(request: NextRequest) {
  // Validate that the request is a HubSpot webhook
  const hubspotSignatureHeader = request.headers.get('HTTP_HUBSPOT_SIGNATURE');
  
  // Ensure signature is present
  if (!hubspotSignatureHeader) {
    return NextResponse.json(
      { error: 'No HubSpot signature provided' }, 
      { status: 401 }
    );
  }

  // Parse the request body
  let payload: HubSpotContactWebhookPayload[];
  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON payload' }, 
      { status: 400 }
    );
  }

  // Verify webhook signature (optional but recommended)
  const webhookSecret = process.env.HUBSPOT_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: 'Webhook secret not configured' }, 
      { status: 500 }
    );
  }

  // Filter for only new contact creation events
  const newContacts = payload.filter(
    contact => contact.eventType === 'create'
  );

  // Process new contacts
  for (const contact of newContacts) {
    try {
      // Example of processing a new contact
      await processNewContact({
        id: contact.objectId,
        firstname: contact.properties.firstname?.value,
        lastname: contact.properties.lastname?.value,
        email: contact.properties.email?.value
      });
    } catch (error) {
      console.error('Error processing new contact:', error);
    }
  }

  // Respond with success
  return NextResponse.json({ 
    status: 'received', 
    processedContacts: newContacts.length 
  });
}

// Example function to process a new contact
async function processNewContact(contact: {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}) {
  // Implement your custom logic here
  console.log('New contact created:', contact);

  // Add your specific processing logic
  // For example:
  // - Save to database
  // - Send welcome email
  // - Trigger other integrations
}

// Optional GET handler for webhook verification
export async function GET() {
  return NextResponse.json({
    message: 'HubSpot Contact Webhook Endpoint',
    status: 'active'
  });
}