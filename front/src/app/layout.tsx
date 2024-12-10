import { Footer } from '@/components/footer/footer';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ["latin"] })

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
        className={`${inter.className} antialiased min-h-screen bg-gradient-to-tr from-[#34395C] via-[#181941] to-[#1B1B1F]`}
      >
        <NextUIProvider>
          <NuqsAdapter>
            <section className='grid grid-rows-[1fr_auto] min-h-dvh'>
              {children}
              <Footer />
            </section>
          </NuqsAdapter>
          <Toaster />
        </NextUIProvider>
      </body>
    </html>
  );
}
