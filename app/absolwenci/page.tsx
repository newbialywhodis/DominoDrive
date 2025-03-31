import { GraduatesSection } from '../components/GraduatesSection';
import { Title, Container, Text } from '@mantine/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nasi absolwenci - DominoDrive',
  description: 'Poznaj historie sukcesu naszych absolwentów. Już setki osób zdobyły prawo jazdy dzięki DominoDrive.',
};

export default function AbsolwenciPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Title>Nasi absolwenci</Title>
        <Text size="lg" mt="md">
          Poznaj naszych absolwentów, którzy pomyślnie zdali egzamin na prawo jazdy. Ich sukces
          jest najlepszym świadectwem jakości naszych kursów.
        </Text>
      </Container>
      <GraduatesSection />
    </>
  );
}