
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  FileText, Clipboard, BookOpen, CheckCircle,
  MessageCircle, Calendar, Shield
} from "lucide-react";

const MEIServices = () => {
  return (
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
  );
};

export default MEIServices;
