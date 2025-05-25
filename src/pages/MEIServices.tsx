
import Hero from "@/components/Hero";
import MEIServices from "@/components/MEIServices";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

const MEIServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Serviços para MEI"
        subtitle="Plano de assinatura e consultoria especializada para Microempreendedores Individuais com suporte online completo"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
        cta={{ text: "Assine Agora", link: "/contato" }}
      />

      {/* MEI Services */}
      <MEIServices />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default MEIServicesPage;
