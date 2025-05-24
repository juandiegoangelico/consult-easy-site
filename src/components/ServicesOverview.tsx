
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, PieChart, LineChart, Users } from "lucide-react";

const ServicesOverview = () => {
  return (
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
              especializado com expertise em gestão empresarial para 
              oferecer uma visão abrangente e estratégica para o seu negócio.
            </p>
            <p className="text-gray-700 mb-6">
              Adaptamos princípios de eficiência e gestão empresarial para 
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
  );
};

export default ServicesOverview;
