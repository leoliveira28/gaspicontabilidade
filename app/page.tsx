import Image from "next/image";
import { Hero } from "./components/Hero"
import { Pillars } from "./components/Pillars"
import { Benefits } from "./components/Benefits"
import { PricingTable } from "./components/PricingTable"
import { Testimonials } from "./components/Testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Benefits />
      <PricingTable />
      <Testimonials />
    </main>
  );
}
