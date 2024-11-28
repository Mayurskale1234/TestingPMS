import { NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client();
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID!;
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET!;
const REDIRECT_URI = process.env.HUBSPOT_REDIRECT_URI!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Invalid authorization code' }, { status: 400 });
  }

  try {
    const tokenResponse = await hubspotClient.oauth.tokensApi.createToken(
      'authorization_code',
      code,
      REDIRECT_URI,
      CLIENT_ID,
      CLIENT_SECRET
    );

    const { accessToken, refreshToken, expiresIn } = tokenResponse.body;

    return NextResponse.json({
      message: 'Authorization successful!',
      accessToken,
      refreshToken,
      expiresIn
    });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    return NextResponse.json({ error: 'Error exchanging code for tokens' }, { status: 500 });
  }
}
