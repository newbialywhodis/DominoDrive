import { VehiclesSection } from '../components/VehiclesSection';
import { Title, Container, Text } from '@mantine/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nasza flota - DominoDrive',
  description: 'Nowoczesne pojazdy szkoleniowe w szkole jazdy DominoDrive. Samochody i motocykle przystosowane do nauki jazdy.',
};

export default function FlotaPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Title>Nasza flota</Title>
        <Text size="lg" mt="md">
          W DominoDrive stawiamy na nowoczesne i bezpieczne pojazdy, które są idealnie przystosowane
          do nauki jazdy. Sprawdź, na jakich pojazdach będziesz odbywać swoje szkolenie.
        </Text>
      </Container>
      <VehiclesSection />
    </>
  );
}