import { ContactForm } from '../components/ContactForm';
import { MapSection } from '../components/MapSection';
import { Title, Container, Text, Divider } from '@mantine/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - DominoDrive',
  description: 'Skontaktuj się z nami. Adres, telefon i formularz kontaktowy szkoły jazdy DominoDrive.',
};

export default function KontaktPage() {
  return (
    <>
      <Container size="lg" py="xl">
        <Title>Kontakt</Title>
        <Text size="lg" mt="md">
          Masz pytania? Chcesz zapisać się na kurs? Skontaktuj się z nami za pomocą formularza
          lub zadzwoń bezpośrednio do naszego biura.
        </Text>
      </Container>
      <ContactForm />
      <Divider my="xl" />
      <MapSection />
    </>
  );
}