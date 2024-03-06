import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Framer Motion Portfolio',
  description: 'Animated Portfolio built with Framer Motion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto_mono.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
