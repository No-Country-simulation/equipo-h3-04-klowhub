import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavBar from '@/components/navbar';
import { ProvidersNextUi } from '@/provider/providerNextUi';
import { Toaster } from 'sonner';
import { NextUIProvider } from '@nextui-org/react';

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
          <div className="flex flex-col min-h-screen">
            <div className="relative">
              <NavBar />
            </div>
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Toaster />
        </NextUIProvider>
      </body>
    </html>
  );
}