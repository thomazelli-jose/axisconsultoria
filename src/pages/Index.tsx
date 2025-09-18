import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { SocialProof } from "@/components/SocialProof";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServiceCards />
      <SocialProof />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
