import './globals.css';

export const metadata = {
  title: 'Artist Onboarding Portal',
  description: 'Step-by-step onboarding for artists',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
