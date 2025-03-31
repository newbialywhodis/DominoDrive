'use client'

import { InstructorsSection } from '../components/InstructorsSection';
import { Container, Title, Text } from '@mantine/core';

export default function InstruktorzyPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Title>Nasi instruktorzy</Title>
        <Text size="lg" mt="md">
          Poznaj zespół doświadczonych instruktorów DominoDrive. Każdy z nich posiada wieloletnie doświadczenie
          i niezbędne kwalifikacje, aby pomóc Ci w zdobyciu prawa jazdy.
        </Text>
      </Container>
      <InstructorsSection />
    </>
  );
}