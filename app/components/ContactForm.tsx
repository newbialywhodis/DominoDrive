'use client'

import { Container, Title, TextInput, Textarea, Button, Group, SimpleGrid, Paper, rem, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconMail, IconPhone, IconMapPin, IconClock } from '@tabler/icons-react';

export function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Imię musi zawierać co najmniej 2 znaki' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Niepoprawny adres email'),
      message: (value) => (value.trim().length < 10 ? 'Wiadomość musi zawierać co najmniej 10 znaków' : null),
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    console.log(values);
    // Tutaj byłaby logika wysyłania formularza
  });

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="lg" ta="center">Kontakt</Title>
      
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Paper shadow="md" p="xl" radius="md" withBorder>
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Imię i nazwisko"
              placeholder="Jan Kowalski"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="jan.kowalski@example.com"
              required
              mt="md"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Telefon"
              placeholder="123 456 789"
              mt="md"
              {...form.getInputProps('phone')}
            />
            <Textarea
              label="Wiadomość"
              placeholder="Napisz w czym możemy Ci pomóc..."
              required
              minRows={4}
              mt="md"
              {...form.getInputProps('message')}
            />
            
            <Group justify="flex-end" mt="xl">
              <Button type="submit">Wyślij wiadomość</Button>
            </Group>
          </form>
        </Paper>
        
        <div>
          <Title order={3} mb="md">Informacje kontaktowe</Title>
          
          <SimpleGrid cols={1} spacing="lg">
            <Group gap="sm" align="flex-start">
              <IconPhone size="1rem" style={{ color: 'var(--mantine-color-blue-filled)' }} />
              <div>
                <Text fw={500}>Telefon</Text>
                <Text>699 933 039</Text>
              </div>
            </Group>
            
            <Group gap="sm" align="flex-start">
              <IconMail size="1rem" style={{ color: 'var(--mantine-color-blue-filled)' }} />
              <div>
                <Text fw={500}>Email</Text>
                <Text>kontakt@dominodrive.pl</Text>
              </div>
            </Group>
            
            <Group gap="sm" align="flex-start">
              <IconMapPin size="1rem" style={{ color: 'var(--mantine-color-blue-filled)' }} />
              <div>
                <Text fw={500}>Adres</Text>
                <Text>ul. Przykładowa 123</Text>
                <Text>00-000 Warszawa</Text>
              </div>
            </Group>
            
            <Group gap="sm" align="flex-start">
              <IconClock size="1rem" style={{ color: 'var(--mantine-color-blue-filled)' }} />
              <div>
                <Text fw={500}>Godziny otwarcia</Text>
                <Text>Poniedziałek - Piątek: 8:00 - 20:00</Text>
              </div>
            </Group>
          </SimpleGrid>
        </div>
      </SimpleGrid>
    </Container>
  );
}