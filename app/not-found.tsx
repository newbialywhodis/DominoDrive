import { Container, Title, Text, Button, Group, rem } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container size="lg" py={rem(80)}>
      <Title ta="center" size="h1">404</Title>
      <Title ta="center" order={2} mt="md" mb="xl">Strona nie została znaleziona</Title>
      
      <Text ta="center" size="lg" mb="xl">
        Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
      </Text>
      
      <Group justify="center">
        <Button component={Link} href="/" size="md">
          Powrót do strony głównej
        </Button>
      </Group>
    </Container>
  );
}