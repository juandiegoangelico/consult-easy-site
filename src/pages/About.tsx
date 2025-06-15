
import Hero from "@/components/Hero";
import { ArrowRight, Check, Award, Users, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Sobre Nós"
        subtitle="Conheça nossa história, nossa equipe e os valores que guiam a JDA Consult"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-w-4 aspect-h-3 mb-6 lg:mb-0">
                <div className="bg-jda-gray h-full w-full rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <BookOpen className="h-16 w-16 mx-auto mb-4 text-jda-accent" />
                    <div className="text-2xl font-semibold text-jda">
                      JDA Consult
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A JDA Consult foi fundada com a missão de oferecer consultoria especializada 
                  para Microempreendedores Individuais (MEI), combinando expertise jurídica e gestão empresarial 
                  estratégica.
                </p>
                <p>
                  Esta combinação única de expertise surgiu da paixão de nossos fundadores 
                  por empreendedorismo individual e pequenos negócios, aliada ao profundo conhecimento jurídico 
                  e experiência em gestão estratégica empresarial.
                </p>
                <p>
                  Ao longo dos anos, percebemos que muitos dos princípios de eficiência e 
                  gestão aplicados no ambiente empresarial podem ser adaptados 
                  com grande sucesso para microempreendedores individuais.
                </p>
                <p>
                  Hoje, nossa equipe multidisciplinar trabalha incansavelmente para 
                  transformar desafios em oportunidades, oferecendo orientação jurídica 
                  e estratégica personalizada para cada MEI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Nossa Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Combinamos conhecimento jurídico especializado com gestão estratégica para 
              oferecer soluções completas aos Microempreendedores Individuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BookOpen className="h-12 w-12 text-jda-accent mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Consultoria Jurídica para MEI
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Formalização e abertura de MEI</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Consultoria em conformidade legal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Orientação sobre obrigações fiscais</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Contratos para prestação de serviços</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Suporte em questões trabalhistas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="h-12 w-12 text-jda-accent mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Gestão Empresarial para MEI
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Organização financeira e contábil</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Planejamento estratégico do negócio</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Controle de fluxo de caixa</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Estratégias de crescimento sustentável</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-jda-accent mr-2 mt-1" />
                  <span>Otimização de processos operacionais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Princípios que norteiam nosso trabalho e relacionamento com clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-jda-gray p-6 rounded-lg text-center fade-in-section">
              <div className="bg-jda-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-jda-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a excelência em tudo o que fazemos, oferecendo serviços de alta qualidade 
                e resultados tangíveis para nossos clientes MEI.
              </p>
            </div>

            <div className="bg-jda-gray p-6 rounded-lg text-center fade-in-section" style={{ animationDelay: "100ms" }}>
              <div className="bg-jda-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-jda-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Empatia</h3>
              <p className="text-gray-600">
                Colocamo-nos no lugar dos nossos clientes microempreendedores, compreendendo seus desafios e 
                trabalhando lado a lado para superá-los.
              </p>
            </div>

            <div className="bg-jda-gray p-6 rounded-lg text-center fade-in-section" style={{ animationDelay: "200ms" }}>
              <div className="bg-jda-accent bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-jda-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Inovação</h3>
              <p className="text-gray-600">
                Promovemos constantemente novas ideias e abordagens, adaptando-nos às 
                mudanças e incentivando a inovação no empreendedorismo individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jda">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos trabalhar juntos
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Estamos prontos para ajudar seu MEI a alcançar seu potencial 
              máximo com nossa consultoria especializada.
            </p>
            <Button asChild size="lg" className="bg-white text-jda hover:bg-gray-100">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
