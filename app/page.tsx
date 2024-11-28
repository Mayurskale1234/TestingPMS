'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Home() {
  const { data: session } = useSession();

  // If user is logged in, redirect to dashboard
  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Affiliate Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Track your affiliate links, monitor conversions, and maximize your earnings
          all in one place.
        </p>
        <div className="space-x-4">
          <a 
            href="/auth/login"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </a>
          <a 
            href="/auth/register"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition border border-blue-600"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}