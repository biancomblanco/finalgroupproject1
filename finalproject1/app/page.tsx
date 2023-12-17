import { HeroSection } from '@/components/HeroSection';
import { Reward } from '@/components/Reward';
import { Community } from '@/components/Community';
import { Button } from '@nextui-org/react';
import Image from "next/legacy/image";
import { About } from '@/components/About';

export default function Home() {
	return (
		<>
			<HeroSection />

			<Reward />
			<Community />

			<About />
		</>
	);
}
