'use client';

import { Group, Text, ActionIcon, Box, Container } from '@mantine/core';
import { IconClock, IconPhone, IconMapPin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export function FooterComponent() {
  return (
    <Box 
      py="sm" 
      px="md" 
      style={{ 
        borderTop: '1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))',
        marginTop: 'auto'
      }}
    >
      <Container size="lg">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="xs" wrap="nowrap">
            <ActionIcon variant="subtle" size="sm">
              <IconClock size={16} />
            </ActionIcon>
            <Text size="xs">PN-PT 8:00-20:00</Text>
            
            <ActionIcon variant="subtle" size="sm">
              <IconPhone size={16} />
            </ActionIcon>
            <Text size="xs">699 933 039</Text>
            
            <ActionIcon variant="subtle" size="sm">
              <IconMapPin size={16} />
            </ActionIcon>
            <Text size="xs">Warszawa</Text>
          </Group>

          <Group gap={5}>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandFacebook size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" size="sm">
              <IconBrandInstagram size={16} />
            </ActionIcon>
          </Group>

          <Text size="xs" c="dimmed">
            © {new Date().getFullYear()} DominoDrive
          </Text>
        </Group>
      </Container>
    </Box>
  );
}