
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  PieChart, LineChart, Users, TrendingUp, DollarSign, 
  BarChart
} from "lucide-react";

const StartupServices = () => {
  return (
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
  );
};

export default StartupServices;
