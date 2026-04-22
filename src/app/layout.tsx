import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PITERS Health Portal | Digital Health Monitoring',
  description: 'Official portal for PITERS smart necklace health monitoring, integrated with SatuSehat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-background">
        <div className="batik-pattern" />
        {children}
      </body>
    </html>
  );
}