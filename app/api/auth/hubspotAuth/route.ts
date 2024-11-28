import { NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client();
const REDIRECT_URI = process.env.HUBSPOT_REDIRECT_URI!;

export async function GET() {
  const scopes = ['crm.objects.contacts.read']; // List your scopes here
  const scopesString = scopes.join(' '); // Join the scopes into a single string

  const authUrl = hubspotClient.oauth.getAuthorizationUrl(
    process.env.HUBSPOT_CLIENT_ID!,
    REDIRECT_URI,
    scopesString, // Pass the scopes as a single string
    'your-unique-state-value' // Set your state value here (can be a random string)
  );
  
  return NextResponse.redirect(authUrl);
}
