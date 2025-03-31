'use client'

import { Container, Title, Text, Grid, Card, Avatar, Group, Badge, rem, ThemeIcon, Box, Flex } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import { instructors } from '../data/instructors';

export function InstructorsSection() {
  const instructorCards = instructors.map((instructor) => (
    <Grid.Col key={instructor.id} span={instructors.length === 1 ? 12 : { base: 12, sm: 6, md: 6 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Grid align="center">
            <Grid.Col span="auto">
              <Flex align="center" justify="center">
                <Avatar
                  src={instructor.imageUrl}
                  size={150}
                  alt={instructor.name}
                />
              </Flex>
            </Grid.Col>
            <Grid.Col span="auto">
              <Title order={3} ta="left" mt="sm" mb="xs">
                {instructor.name}
              </Title>
              <Badge mb="md" size="lg">{instructor.role}</Badge>
              <Text size="sm" c="dimmed" mb="md">
                {instructor.description}
              </Text>
              {instructor.contact && (
                <Group gap="sm" align="center" mb="md">
                  <ThemeIcon variant='light' color="blue" size="md">
                    <IconPhone size={rem(16)} />
                  </ThemeIcon>
                  <Text fw={600} size="xl">{instructor.contact}</Text>
                </Group>
              )}
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </Grid.Col>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="lg" ta="center">Nasi instruktorzy</Title>
      <Grid gutter="lg">
        {instructorCards}
      </Grid>
    </Container>
  );
}