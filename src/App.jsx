import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import SocialProofSection from "./components/SocialProofSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  const handleWaitlistSubmit = () => {
    // Your form submission logic here...
  
    // Fire custom event
    window.gtag('event', 'join_waitlist_clicked', {
      method: 'landing_page_form',
      page_location: window.location.href,
    });
  };
  return (
    <div className="min-h-screen bg-white">
      <Header handleWaitlistSubmit={handleWaitlistSubmit} />
      <main>
        <HeroSection handleWaitlistSubmit={handleWaitlistSubmit} />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <SocialProofSection />
        <CTASection handleWaitlistSubmit={handleWaitlistSubmit} />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}