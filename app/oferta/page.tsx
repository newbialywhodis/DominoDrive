import { OfferSection } from '../components/OfferSection';
import { Title, Container, Text, Space } from '@mantine/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oferta - DominoDrive',
  description: 'Pełna oferta kursów nauki jazdy oraz doskonalenia techniki jazdy w szkole DominoDrive.',
};

export default function OfertaPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Title>Nasza oferta</Title>
        <Text size="lg" mt="md">
          W DominoDrive oferujemy kompleksowe kursy nauki jazdy na kategorię A i B, 
          a także kursy doskonalenia techniki jazdy dla bardziej doświadczonych kierowców.
        </Text>
      </Container>
      <OfferSection />
    </>
  );
}