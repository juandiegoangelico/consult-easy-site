
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  PieChart, LineChart, Users, TrendingUp, DollarSign, 
  BarChart, FileText, Clipboard, BookOpen 
} from "lucide-react";
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Soluções Personalizadas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Oferecemos serviços especializados para atender às necessidades específicas 
              de startups e microempreendedores individuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-jda">
                Nossa abordagem única
              </h3>
              <p className="text-gray-700 mb-6">
                Diferentemente de consultorias tradicionais, combinamos conhecimento jurídico 
                especializado em Direito do Trabalho com expertise em Gestão Hospitalar para 
                oferecer uma visão abrangente e estratégica para o seu negócio.
              </p>
              <p className="text-gray-700 mb-6">
                Adaptamos princípios de eficiência e gestão do setor hospitalar para 
                criar soluções inovadoras e práticas para startups e MEI, garantindo não apenas 
                conformidade legal, mas também operações otimizadas e preparadas para crescimento.
              </p>
              <Button asChild className="bg-jda hover:bg-jda-light">
                <Link to="/contato">Solicite um Orçamento</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-jda-gray p-6 rounded-lg text-center">
                <BookOpen className="h-10 w-10 mx-auto mb-3 text-jda-accent" />
                <h4 className="font-semibold text-gray-800">Expertise Jurídica</h4>
              </div>
              <div className="bg-jda-gray p-6 rounded-lg text-center">
                <PieChart className="h-10 w-10 mx-auto mb-3 text-jda-accent" />
                <h4 className="font-semibold text-gray-800">Modelagem de Negócios</h4>
              </div>
              <div className="bg-jda-gray p-6 rounded-lg text-center">
                <LineChart className="h-10 w-10 mx-auto mb-3 text-jda-accent" />
                <h4 className="font-semibold text-gray-800">Análise de Mercado</h4>
              </div>
              <div className="bg-jda-gray p-6 rounded-lg text-center">
                <Users className="h-10 w-10 mx-auto mb-3 text-jda-accent" />
                <h4 className="font-semibold text-gray-800">Mentoria</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Services */}
      <section id="startups" className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Serviços para Startups</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Soluções específicas para startups em diferentes estágios de maturidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ServiceCard
              title="Gestão e Operação de Startups"
              description="Implementação de metodologias ágeis e processos eficientes para otimizar a operação da sua startup."
              icon={<LineChart className="h-10 w-10" />}
              link="/servicos#startups"
            />
            <ServiceCard
              title="Modelagem e Validação de Modelos de Negócios"
              description="Desenvolvimento e teste de modelos de negócios utilizando metodologias como Business Model Canvas e Lean Startup."
              icon={<PieChart className="h-10 w-10" />}
              link="/servicos#startups"
            />
            <ServiceCard
              title="Análise de Mercado"
              description="Pesquisa e análise de mercado para identificar oportunidades, concorrentes e tendências relevantes para seu negócio."
              icon={<BarChart className="h-10 w-10" />}
              link="/servicos#startups"
            />
            <ServiceCard
              title="Definição de Métricas"
              description="Implementação de KPIs e sistemas de medição para acompanhar o desempenho e crescimento da sua startup."
              icon={<TrendingUp className="h-10 w-10" />}
              link="/servicos#startups"
            />
            <ServiceCard
              title="Pitches de Negócios"
              description="Preparação e refinamento de apresentações para potenciais investidores e parceiros estratégicos."
              icon={<Users className="h-10 w-10" />}
              link="/servicos#startups"
            />
            <ServiceCard
              title="Valuation de Startups"
              description="Avaliação do valor do seu negócio utilizando metodologias específicas para startups em diferentes estágios."
              icon={<DollarSign className="h-10 w-10" />}
              link="/servicos#startups"
            />
          </div>

          <div className="text-center">
            <Button asChild className="bg-jda hover:bg-jda-light">
              <Link to="/contato">Solicite uma Consultoria</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MEI Services */}
      <section id="mei" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Serviços para MEI</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Consultoria especializada para Microempreendedores Individuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ServiceCard
              title="Regras e Procedimentos para MEI"
              description="Orientação completa sobre os requisitos, documentação e procedimentos necessários para se tornar e manter-se como MEI."
              icon={<Clipboard className="h-10 w-10" />}
              link="/servicos#mei"
            />
            <ServiceCard
              title="Políticas e Procedimentos Legais"
              description="Consultoria sobre as normas e procedimentos legais aplicáveis aos MEIs, incluindo obrigações fiscais e trabalhistas."
              icon={<FileText className="h-10 w-10" />}
              link="/servicos#mei"
            />
            <ServiceCard
              title="Benefícios da Legislação MEI"
              description="Orientação sobre como aproveitar todos os benefícios e incentivos previstos na legislação para Microempreendedores Individuais."
              icon={<BookOpen className="h-10 w-10" />}
              link="/servicos#mei"
            />
          </div>

          <div className="text-center">
            <Button asChild className="bg-jda hover:bg-jda-light">
              <Link to="/contato">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Nosso Processo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Uma abordagem estruturada para garantir os melhores resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section">
              <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
                1
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Diagnóstico</h3>
              <p className="text-gray-600">
                Análise detalhada da situação atual, identificando desafios e oportunidades específicas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "100ms" }}>
              <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
                2
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Planejamento</h3>
              <p className="text-gray-600">
                Desenvolvimento de um plano de ação personalizado com base nas necessidades identificadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "200ms" }}>
              <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
                3
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Implementação</h3>
              <p className="text-gray-600">
                Execução das estratégias definidas com acompanhamento contínuo e suporte dedicado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative fade-in-section" style={{ animationDelay: "300ms" }}>
              <div className="bg-jda text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl absolute -top-4 left-1/2 transform -translate-x-1/2">
                4
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Avaliação</h3>
              <p className="text-gray-600">
                Medição dos resultados obtidos e ajustes necessários para garantir o sucesso contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jda text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Entre em contato conosco hoje mesmo para uma consultoria inicial e descubra como 
              podemos ajudar sua startup ou MEI a alcançar novos patamares.
            </p>
            <Button asChild size="lg" className="bg-white text-jda hover:bg-gray-100">
              <Link to="/contato">Agende uma Consultoria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
