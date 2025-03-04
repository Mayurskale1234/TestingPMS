import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './Providers';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Affiliate Dashboard',
  description: 'Monitor your affiliate performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}