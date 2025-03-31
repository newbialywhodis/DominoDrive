import { HeroSection } from './components/HeroSection';
import { InstructorsSection } from './components/InstructorsSection';
import { VehiclesSection } from './components/VehiclesSection';
import { GraduatesSection } from './components/GraduatesSection';
import { MapSection } from './components/MapSection';
import { Divider } from '@mantine/core';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <InstructorsSection />
      <Divider />
      <VehiclesSection />
      <Divider />
      <GraduatesSection />
      <Divider />
      <MapSection />
    </>
  );
}