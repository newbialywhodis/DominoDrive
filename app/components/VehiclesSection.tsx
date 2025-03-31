'use client'

import { Container, Title, Text, Grid, Card, Image, Badge, Group, rem, Stack, List } from '@mantine/core';
import { vehicles } from '../data/vehicles';
import { IconCar, IconMotorbikeFilled } from '@tabler/icons-react';

export function VehiclesSection() {
  const vehicleCards = vehicles.map((vehicle) => (
    <Grid.Col key={vehicle.id} span={{ base: 12, sm: 6 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={vehicle.imageUrl}
            h={rem(250)}
            alt={vehicle.name}
            fit="cover"
          />
        </Card.Section>
        
        <Group mt="md" mb="xs">
          <Title order={3}>{vehicle.name}</Title>
          <Badge leftSection={vehicle.type === 'car' ? <IconCar size="1.2rem" /> : <IconMotorbikeFilled size="1.2rem" />}>
            {vehicle.type === 'car' ? "Samochód" : "Motocykl"}
          </Badge>
        </Group>
        
        <Text size="sm" c="dimmed" mb="md">
          {vehicle.description}
        </Text>
        
        {vehicle.features && vehicle.features.length > 0 && (
          <Stack mt="md">
            <Text fw={500}>Wyposażenie:</Text>
            <List size="sm">
              {vehicle.features.map((feature, index) => (
                <List.Item key={index}>{feature}</List.Item>
              ))}
            </List>
          </Stack>
        )}
      </Card>
    </Grid.Col>
  ));

  return (
    <Container size="lg" py="xl">
      <Grid gutter="lg">
        {vehicleCards}
      </Grid>
    </Container>
  );
}