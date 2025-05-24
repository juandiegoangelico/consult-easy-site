import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  PieChart, LineChart, Users, TrendingUp, DollarSign, 
  BarChart, FileText, Clipboard, BookOpen, CheckCircle,
  MessageCircle, Calendar, Shield
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
              Consultoria especializada e plano de assinatura para Microempreendedores Individuais.
            </p>
          </div>

          {/* Plano de Assinatura em Destaque */}
          <div className="bg-gradient-to-r from-jda to-jda-light p-8 rounded-lg shadow-lg text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Plano de Assinatura para Atendimento Online ao MEI
              </h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                Elevando o Potencial Empreendedor com suporte especializado, desburocratização e foco no core business. 
                Transformamos a complexidade em simplicidade para acelerar sua jornada de crescimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Calendar className="h-10 w-10 mb-4 text-jda-accent" />
                <h4 className="text-xl font-semibold mb-3">Emissão Mensal do DAS</h4>
                <p className="opacity-90">
                  Geração e envio mensal do Documento de Arrecadação do Simples Nacional, 
                  garantindo pagamento em dia e evitando multas.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <FileText className="h-10 w-10 mb-4 text-jda-accent" />
                <h4 className="text-xl font-semibold mb-3">Declaração Anual (DASN-SIMEI)</h4>
                <p className="opacity-90">
                  Elaboração e transmissão da Declaração Anual do Simples Nacional, 
                  cumprindo a obrigação fiscal de forma precisa e eficiente.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <MessageCircle className="h-10 w-10 mb-4 text-jda-accent" />
                <h4 className="text-xl font-semibold mb-3">Suporte via Chat/Email</h4>
                <p className="opacity-90">
                  Canal direto e ágil para dúvidas pontuais com equipe especializada 
                  pronta para oferecer respostas claras e soluções eficientes.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-jda-accent hover:bg-jda-accent-light text-jda">
                <Link to="/contato">Assine Agora</Link>
              </Button>
            </div>
          </div>

          {/* O que é o MEI */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-jda text-center">
              O Que é o MEI e a Necessidade de Suporte Online?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  O Microempreendedor Individual (MEI) foi instituído no Brasil pela Lei Complementar nº 128/2008 
                  com o objetivo de formalizar milhões de trabalhadores autônomos, proporcionando-lhes acesso 
                  a benefícios previdenciários e a um regime tributário simplificado.
                </p>
                <p className="text-gray-700 mb-4">
                  Apesar das facilidades, a gestão do MEI envolve responsabilidades como a emissão de notas fiscais, 
                  o pagamento mensal do DAS e a Declaração Anual. A falta de conhecimento pode gerar multas e complicações.
                </p>
              </div>
              <div className="bg-jda-gray p-6 rounded-lg">
                <Shield className="h-12 w-12 text-jda-accent mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Vantagens do Atendimento Online</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-jda-accent mr-2 mt-0.5" />
                    Flexibilidade de horários
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-jda-accent mr-2 mt-0.5" />
                    Otimização de tempo
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-jda-accent mr-2 mt-0.5" />
                    Acesso a especialistas
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-jda-accent mr-2 mt-0.5" />
                    Sem necessidade de deslocamento
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Serviços Complementares */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-jda text-center">
              Serviços Complementares
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
