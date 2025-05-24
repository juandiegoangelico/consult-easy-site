
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import StartupServices from "@/components/StartupServices";
import MEIServices from "@/components/MEIServices";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import { useEffect } from "react";

const Services = () => {
  // Function to handle anchor link scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Add a slight delay to ensure DOM is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Execute on mount and hash change
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Nossos Serviços"
        subtitle="Consultoria especializada para impulsionar startups e MEI com estratégia e segurança jurídica"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
      />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Startup Services */}
      <StartupServices />

      {/* MEI Services */}
      <MEIServices />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Services;
