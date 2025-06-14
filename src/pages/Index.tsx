
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Briefcase, Clipboard, CheckCircle, Star,
  Calendar, MessageCircle, Shield, FileText
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Consultoria Especializada para MEI"
        subtitle="Combinamos expertise jurídica e gestão empresarial para impulsionar seu MEI com estratégias inovadoras e suporte online completo."
        cta={{ text: "Conheça Nossos Serviços", link: "/servicos-mei" }}
        secondaryCta={{ text: "Entre em Contato", link: "/contato" }}
        isHomepage={true}
      />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Por que escolher a JDA Consult para seu MEI?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Oferecemos uma abordagem única que combina experiência jurídica e gestão
              estratégica especializada para Microempreendedores Individuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Expertise Jurídica MEI"
              description="Especialistas em consultoria jurídica para MEI, garantindo conformidade legal e aproveitamento de todos os benefícios."
              icon={<BookOpen className="h-10 w-10" />}
              delay={100}
            />
            <ServiceCard
              title="Gestão Estratégica"
              description="Experiência em gestão empresarial aplicada ao desenvolvimento de estratégias eficientes para MEI."
              icon={<Briefcase className="h-10 w-10" />}
              delay={200}
            />
            <ServiceCard
              title="Suporte Online Completo"
              description="Atendimento online com flexibilidade de horários e acesso direto a especialistas."
              icon={<MessageCircle className="h-10 w-10" />}
              delay={300}
            />
            <ServiceCard
              title="Emissão Mensal do DAS"
              description="Geração e envio mensal do Documento de Arrecadação, garantindo pagamento em dia."
              icon={<Calendar className="h-10 w-10" />}
              delay={400}
            />
            <ServiceCard
              title="Declaração Anual"
              description="Elaboração e transmissão da DASN-SIMEI de forma precisa e eficiente."
              icon={<FileText className="h-10 w-10" />}
              delay={500}
            />
            <ServiceCard
              title="Orientação Completa"
              description="Consultoria sobre regras, procedimentos e benefícios para Microempreendedores Individuais."
              icon={<Clipboard className="h-10 w-10" />}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Sobre a JDA Consult</h2>
              <p className="text-gray-600 mb-6">
                A JDA Consult nasceu da visão de unir conhecimentos jurídicos 
                e gestão empresarial para oferecer um serviço único de consultoria estratégica 
                especializada para MEI.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa experiência nos permite entender profundamente os desafios jurídicos e 
                operacionais que Microempreendedores Individuais enfrentam, especialmente em 
                Florianópolis e em todo o Brasil.
              </p>
              <Button asChild className="bg-jda hover:bg-jda-light">
                <Link to="/sobre">Conheça Nossa Equipe</Link>
              </Button>
            </div>
            <div className="bg-jda-gray p-8 rounded-lg shadow-md">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-jda-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Membro das comissões da OAB/SC
                    </h4>
                    <p className="text-gray-600">
                      Participação ativa nas comissões da Ordem dos Advogados do Brasil, Seção Santa Catarina.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-jda-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Especialistas em MEI
                    </h4>
                    <p className="text-gray-600">
                      Formação especializada e vasta experiência em questões jurídicas para MEI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-jda-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Experiência em Gestão MEI
                    </h4>
                    <p className="text-gray-600">
                      Aplicamos princípios de gestão eficiente para otimizar operações de MEI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">O que nossos clientes MEI dizem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Veja como temos ajudado Microempreendedores Individuais a alcançar seus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Carlos Mendes"
              role="Microempreendedor Individual"
              company="Serviços de Manutenção"
              content="Como MEI, eu estava perdido com tantas regulamentações. A JDA me ajudou a entender meus direitos e a aproveitar os benefícios que eu nem sabia que existiam. Recomendo fortemente!"
              rating={5}
            />
            <TestimonialCard
              name="Maria Santos"
              role="MEI"
              company="Costura e Bordados"
              content="O plano de assinatura da JDA é perfeito! Não preciso mais me preocupar com o DAS e a declaração anual. Tudo é feito automaticamente e posso focar no meu negócio."
              rating={5}
            />
            <TestimonialCard
              name="João Silva"
              role="Microempreendedor"
              company="Delivery de Comida"
              content="O suporte online é excepcional. Sempre que tenho dúvidas, recebo respostas rápidas e claras. A JDA Consult transformou a forma como gerencio meu MEI."
              rating={5}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-jda text-jda hover:bg-jda hover:text-white">
              <Link to="/depoimentos">Ver Todos os Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jda text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <Star className="h-16 w-16 mx-auto mb-6 text-jda-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para impulsionar seu MEI?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Entre em contato hoje mesmo e descubra como podemos ajudar seu MEI a crescer com estratégia e segurança jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-jda-accent hover:bg-jda-accent-light">
                <Link to="/contato">Agende uma Consulta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/servicos-mei">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
