import { GridBackground } from "@/components/ui/grid-background";
import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Comparison } from "@/components/sections/comparison";
import { Contact } from "@/components/sections/contact";
import { FAQs } from "@/components/sections/faqs";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero section with dotted background */}
      <Hero />
      {/* Other sections with grid background */}
      <GridBackground>
        <Services />
        <Portfolio />
        <Comparison />
        <Process />
        <Contact />
        <FAQs />
        <Footer />
      </GridBackground>
    </div>
  );
}
