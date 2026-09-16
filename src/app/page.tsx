import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import HowWeWork from "@/components/HowWeWork";
import OurOffice from "@/components/OurOffice";
import Honoring from "@/components/Honoring";
import Expertise from "@/components/Expertise";
import Specialties from "@/components/Specialties";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <WhoWeHelp />
        <QuoteBanner />
        <HowWeWork />
        <Honoring />
        <Expertise />
        <Specialties />
        <OurOffice />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
