
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Briefcase, PieChart, TrendingUp, 
  Users, Clipboard, CheckCircle, Star
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Consultoria Especializada para Startups e MEI"
        subtitle="Combinamos expertise em Direito do Trabalho e Gestão Hospitalar para impulsionar seu negócio com estratégias inovadoras e sustentáveis."
        cta={{ text: "Conheça Nossos Serviços", link: "/servicos" }}
        secondaryCta={{ text: "Entre em Contato", link: "/contato" }}
        isHomepage={true}
      />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Por que escolher a JDA Consult?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Oferecemos uma abordagem única que combina experiência jurídica e gestão
              estratégica para garantir o sucesso do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Expertise Jurídica"
              description="Especialistas em Direito do Trabalho e Processo do Trabalho, garantindo conformidade legal para seu negócio."
              icon={<BookOpen className="h-10 w-10" />}
              delay={100}
            />
            <ServiceCard
              title="Gestão Estratégica"
              description="Experiência em Gestão Hospitalar aplicada ao desenvolvimento de estratégias eficientes para startups e MEI."
              icon={<Briefcase className="h-10 w-10" />}
              delay={200}
            />
            <ServiceCard
              title="Modelagem de Negócios"
              description="Desenvolvimento e validação de modelos de negócios inovadores e sustentáveis para startups."
              icon={<PieChart className="h-10 w-10" />}
              delay={300}
            />
            <ServiceCard
              title="Análise de Mercado"
              description="Insights valiosos sobre o mercado para identificar oportunidades e minimizar riscos."
              icon={<TrendingUp className="h-10 w-10" />}
              delay={400}
            />
            <ServiceCard
              title="Conexão com Investidores"
              description="Preparação e conexão com potenciais investidores para alavancar seu negócio."
              icon={<Users className="h-10 w-10" />}
              delay={500}
            />
            <ServiceCard
              title="Suporte para MEI"
              description="Orientação completa sobre regras, procedimentos e benefícios para Microempreendedores Individuais."
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
                A JDA Consult nasceu da visão de unir conhecimentos em Direito do Trabalho 
                e Gestão Hospitalar para oferecer um serviço único de consultoria estratégica 
                para startups e MEI.
              </p>
              <p className="text-gray-600 mb-8">
                Nossa experiência nos permite entender profundamente os desafios jurídicos e 
                operacionais que empreendedores enfrentam, especialmente em Florianópolis 
                e em todo o Brasil.
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
                      Especialistas em Direito do Trabalho
                    </h4>
                    <p className="text-gray-600">
                      Formação especializada e vasta experiência em questões trabalhistas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-jda-accent mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Experiência em Gestão Hospitalar
                    </h4>
                    <p className="text-gray-600">
                      Aplicamos princípios de gestão eficiente do setor hospitalar para otimizar operações empresariais.
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
            <h2 className="text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Veja como temos ajudado empreendedores a alcançar seus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ana Silva"
              role="CEO"
              company="TechHealth Startup"
              content="A consultoria da JDA foi fundamental para estruturarmos nosso modelo de negócio e prepararmos nossa startup para receber investimentos. O conhecimento em gestão hospitalar fez toda a diferença!"
              rating={5}
            />
            <TestimonialCard
              name="Carlos Mendes"
              role="Microempreendedor Individual"
              company=""
              content="Como MEI, eu estava perdido com tantas regulamentações. A JDA me ajudou a entender meus direitos e a aproveitar os benefícios que eu nem sabia que existiam. Recomendo fortemente!"
              rating={5}
            />
            <TestimonialCard
              name="Mariana Costa"
              role="Fundadora"
              company="Inova Tech"
              content="A JDA Consult nos guiou durante todo o processo de validação do nosso modelo de negócio e nos preparou para apresentações a investidores. O resultado foi um aporte que superou nossas expectativas."
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
              Pronto para impulsionar seu negócio?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Entre em contato hoje mesmo e descubra como podemos ajudar sua startup ou MEI a crescer com estratégia e segurança jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-jda-accent hover:bg-jda-accent-light">
                <Link to="/contato">Agende uma Consulta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
