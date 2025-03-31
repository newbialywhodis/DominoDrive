'use client';

import { Container, Title, Text, Timeline, Card, List, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconCar, IconMotorbikeFilled, IconCertificate, IconRoad, IconBook } from '@tabler/icons-react';
import { offers, additionalDrivingHoursOffers } from '../data/offers';

export function OfferSection() {
  return (
    <Container size="lg" py="xl">

      <Grid >
        {offers.map((offer) => (
          <Grid.Col key={offer.id} span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">{offer.name}</Title>
              <Text mb="lg">{offer.description}</Text>

              <Timeline active={4} bulletSize={24} lineWidth={2}>
                <Timeline.Item bullet={<IconBook size={12} />} title="Zajęcia teoretyczne">
                  <Text size="sm" mb={4}>30 godzin wykładów</Text>
                  <Text size="sm" c="dimmed">Przepisy ruchu drogowego, technika jazdy, pierwsza pomoc</Text>
                </Timeline.Item>
                
                <Timeline.Item bullet={<IconCar size={12} />} title="Zajęcia praktyczne">
                  <Text size="sm" mb={4}>30 godzin jazd</Text>
                  <Text size="sm" c="dimmed">Nauka podstaw prowadzenia pojazdu, manewrowanie, jazda w ruchu miejskim</Text>
                </Timeline.Item>
                
                <Timeline.Item bullet={<IconRoad size={12} />} title="Egzamin wewnętrzny">
                  <Text size="sm" mb={4}>Teoretyczny i praktyczny</Text>
                  <Text size="sm" c="dimmed">Sprawdzenie gotowości do egzaminu państwowego</Text>
                </Timeline.Item>
                
                <Timeline.Item bullet={<IconCertificate size={12} />} title="Egzamin państwowy">
                  <Text size="sm" mb={4}>Pomoc w przygotowaniu</Text>
                  <Text size="sm" c="dimmed">Wsparcie podczas przygotowań do egzaminu państwowego</Text>
                </Timeline.Item>
              </Timeline>

              <Text mt="md" fw={500}>Cena: {offer.price}</Text>
              <Text mt="md" c="dimmed">Cena za dodatkową godzinę: {offer.additionalHoursPrice}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Title order={3} mt="xl" mb="md">Dodatkowe godziny doszkalające</Title>
      <Grid gutter="lg">
        {additionalDrivingHoursOffers.map((offer) => (
          <Grid.Col key={offer.id} span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">{offer.name}</Title>
              <Text mb="lg">{offer.description}</Text>

              <List spacing="md" size="md" center>
                {offer.features.map((feature, index) => (
                  <List.Item key={index}>{feature}</List.Item>
                ))}
              </List>

              <Text mt="md" fw={500}>Cena za godzinę: {offer.pricePerHour}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
