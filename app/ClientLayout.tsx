'use client';

import { AppShell, MantineProvider } from '@mantine/core';
import { HeaderComponent } from './components/HeaderComponent';
import { theme } from './theme';
import { FooterComponent } from './components/FooterComponent';
import { useLocalStorage } from '@mantine/hooks';

type ColorScheme = 'light' | 'dark' | 'auto';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'auto',
  });

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={colorScheme}
    >
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <HeaderComponent />
        </AppShell.Header>
        <AppShell.Main>
          {children}
          <FooterComponent />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}