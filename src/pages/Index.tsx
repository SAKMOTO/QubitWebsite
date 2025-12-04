import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollShowcaseSection from "@/components/ScrollShowcaseSection";
import AboutSection from "@/components/AboutSection";
import IntegrationWallSection from "@/components/IntegrationWallSection";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import CreditsSection from "@/components/CreditsSection";
import Footer from "@/components/Footer";
import { SmoothCursorDemo } from "@/components/SmoothCursorDemo";
import MusicPlayerCard from "@/components/MusicPlayerCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SmoothCursorDemo />
      <Navbar />
      <HeroSection />
      <ScrollShowcaseSection />
      <AboutSection />
      <IntegrationWallSection />
      <MarqueeDemo />
      <CreditsSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
      <MusicPlayerCard />
    </div>
  );
};

export default Index;
