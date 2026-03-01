import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WhatsAppSection from "@/components/landing/WhatsAppSection";
import PricingSection from "@/components/landing/PricingSection";
import TrialSection from "@/components/landing/TrialSection";
import DemoSection from "@/components/landing/DemoSection";

import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <BenefitsSection />
    <PricingSection />
    <WhatsAppSection />
    <TrialSection />
    <DemoSection />
    <Footer />
  </>
);

export default Index;
