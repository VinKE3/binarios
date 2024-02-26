import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Services from "@/app/components/Services";
import Solutions from "@/app/components/Solutions";
import Testimonials from "@/app/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Testimonials />
    </div>
  );
}
