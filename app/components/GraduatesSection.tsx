'use client'

import { Container, Title, Text, Grid, Card, Group, Stack, Avatar, Badge, Box } from '@mantine/core';
import { graduates } from '../data/graduates';

export function GraduatesSection() {
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((part: string) => part[0])
      .join('')
      .toUpperCase();
  };

  const graduateCards = graduates.map((graduate) => (
    <Grid.Col key={graduate.id} span={{ base: 12, sm: 6, md: 4 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack align="center" mb="md" gap="xs">
          <Avatar 
            size={100} 
            radius={100} 
            alt={graduate.name}
            color="blue"
          >
            {getInitials(graduate.name)}
          </Avatar>
          <Title order={3} ta="center">{graduate.name}</Title>
        </Stack>
        
        <Group mb="md" gap="xs" justify="center">
          <Badge variant="light" color="blue">
            {graduate.licenseType}
          </Badge>
          <Badge variant="light" color="gray">
            {new Date(graduate.graduationDate).toLocaleDateString('pl-PL')}
          </Badge>
        </Group>
        
        {graduate.testimonial && (
          <Box>
            <Text size="sm" fs="italic" c="gray" mt="xs">
              "{graduate.testimonial}"
            </Text>
          </Box>
        )}
      </Card>
    </Grid.Col>
  ));

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="lg" ta="center">Nasi absolwenci</Title>
      <Grid gutter="lg">
        {graduateCards}
      </Grid>
    </Container>
  );
}