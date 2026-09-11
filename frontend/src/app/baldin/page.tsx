import {
  CallToAction,
  CommunitySection,
  EvolutionSection,
  FaqSection,
  FeaturesSection,
  Footer,
  Header,
  Hero,
  JourneySection,
  OriginSection,
  Ticker,
} from "./components";

export default function BaldinPage() {
  return (
    <div className="baldin-shell">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <FeaturesSection />
        <EvolutionSection />
        <CommunitySection />
        <OriginSection />
        <JourneySection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
