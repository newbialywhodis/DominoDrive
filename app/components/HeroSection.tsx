'use client'

import { Container, Title, Text, Button, Group, Stack, rem } from '@mantine/core';
import { IconLicense, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Container size="lg" py={rem(80)}>
      <Stack gap="xl">
        <Stack gap="md">
          <Title order={1} size="h1">
            Doskonalenie i nauka jazdy z profesjonalistami
          </Title>
          <Text size="lg" maw={rem(700)}>
            DominoDrive to profesjonalna szkoła nauki jazdy, która pomoże Ci zdobyć prawo jazdy
            lub udoskonalić swoje umiejętności. Oferujemy kursy na kategorię A i B z doświadczonymi
            instruktorami i nowoczesnymi pojazdami.
          </Text>
        </Stack>
        
        <Group>
          <Button 
            component={Link} 
            href="/oferta" 
            size="lg" 
            leftSection={<IconLicense size="1rem" />}
          >
            Sprawdź naszą ofertę
          </Button>
          <Button 
            component={Link} 
            href="/kontakt" 
            size="lg" 
            variant="light" 
            leftSection={<IconPhone size="1rem" />}
          >
            Skontaktuj się z nami
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}