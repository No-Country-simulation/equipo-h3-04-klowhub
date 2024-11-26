import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'KLOWHUB',
  description: 'Todo lo que necesitas de NoCode-LowCode en un solo lugar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-[#34395C] via-[#181941] to-[#1B1B1F]`}
      >
        <NextUIProvider>
          {children}
          <Toaster />
        </NextUIProvider>
      </body>
    </html>
  );
}
