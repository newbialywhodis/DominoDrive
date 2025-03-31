import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import { Metadata } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'DominoDrive - Doskonalenie i nauka jazdy',
  description: 'Profesjonalna szkoła nauki jazdy oferująca kursy na prawo jazdy kategorii A i B. Doświadczeni instruktorzy i nowoczesna flota pojazdów.',
  keywords: 'szkoła jazdy, prawo jazdy, nauka jazdy, kurs prawa jazdy, jazda samochodem, instruktor jazdy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}