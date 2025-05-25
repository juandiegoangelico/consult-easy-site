
import Hero from "@/components/Hero";
import StartupServices from "@/components/StartupServices";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

const StartupServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Serviços para Startups"
        subtitle="Consultoria especializada para impulsionar startups com estratégia, modelagem de negócios e preparação para investimentos"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
        cta={{ text: "Solicite uma Consultoria", link: "/contato" }}
      />

      {/* Startup Services */}
      <StartupServices />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default StartupServicesPage;
