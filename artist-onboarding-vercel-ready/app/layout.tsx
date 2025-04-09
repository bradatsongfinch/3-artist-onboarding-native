import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Artist Onboarding Portal',
  description: 'Get started with your artist journey.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
