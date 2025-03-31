'use client';

import { Group, Title, Container, Burger, Drawer, Stack, Tabs, ActionIcon, Image } from '@mantine/core';
import { IconCar, IconSun, IconMoon } from '@tabler/icons-react';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import Link from 'next/link';
import { NavLink } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';

const links = [
  { link: '/', label: 'Strona główna' },
  { link: '/oferta', label: 'Oferta' },
  { link: '/instruktorzy', label: 'Instruktorzy' },
  { link: '/flota', label: 'Nasza flota' },
  { link: '/absolwenci', label: 'Nasi absolwenci' },
  { link: '/kontakt', label: 'Kontakt' },
];

export function HeaderComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);
  
  const [_, setStoredColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'auto',
  });

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    setStoredColorScheme(newColorScheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = links.map((link) => (
    <Tabs.Tab
      key={link.label}
      value={link.link}
      component={(props: ComponentPropsWithoutRef<'a'>) => (
        <Link {...props} href={link.link}>
          {link.label}
        </Link>
      )}
    />
  ));

  const mobileItems = links.map((link) => (
    <NavLink
      key={link.label}
      label={link.label}
      component={Link}
      href={link.link}
      active={pathname === link.link}
      onClick={close}
      variant="filled"
      color={pathname === link.link ? 'blue' : 'gray'}
    />
  ));

  if (!mounted) {
    return (
      <header>
        <Container size="lg" py="md">
          <Group justify="space-between" align="center">
            <Group gap="xs">
              <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
              <Title order={1} size="h3">DominoDrive</Title>
            </Group>
            <ActionIcon variant="default" size="lg" aria-label="Toggle color scheme" />
          </Group>
        </Container>
      </header>
    );
  }

  return (
    <header>
      <Container size="lg" py="md">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
            <Title order={1} size="h3">DominoDrive</Title>
          </Group>

          <Group>
            <Tabs
              value={pathname}
              variant="pills"
              visibleFrom="md"
              defaultValue="/"
            >
              <Tabs.List>{items}</Tabs.List>
            </Tabs>

            <ActionIcon
              onClick={toggleColorScheme}
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
            </ActionIcon>
          </Group>

          <Burger 
            opened={opened} 
            onClick={toggle} 
            hiddenFrom="sm" 
            size="sm"
          />
          
          <Drawer
            opened={opened}
            onClose={close}
            size="70%"
            padding="md"
            hiddenFrom="sm"
          >
            <Stack gap="xs">
              {mobileItems}
              <NavLink
                label={colorScheme === 'light' ? 'Ciemny motyw' : 'Jasny motyw'}
                leftSection={colorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
                onClick={() => {
                  toggleColorScheme();
                  close();
                }}
                variant="filled"
              />
            </Stack>
          </Drawer>
        </Group>
      </Container>
    </header>
  );
}