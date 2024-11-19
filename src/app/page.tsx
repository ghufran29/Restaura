import About from "@/components/About";
import FoodMenu from "@/components/FoodMenu";
import HeroSection from "@/components/HeroSection";
import Reservation from "@/components/Reservation";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services/>
      <About/>
      <FoodMenu/>
      <Reservation/>
      <Team/>
      <Testimonials/>
    </main>
  );
}
