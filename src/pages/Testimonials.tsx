
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO",
    company: "TechHealth Startup",
    content: "A consultoria da JDA foi fundamental para estruturarmos nosso modelo de negócio e prepararmos nossa startup para receber investimentos. O conhecimento em gestão hospitalar fez toda a diferença! Recomendo fortemente para qualquer startup da área de saúde.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Microempreendedor Individual",
    company: "",
    content: "Como MEI, eu estava perdido com tantas regulamentações. A JDA me ajudou a entender meus direitos e a aproveitar os benefícios que eu nem sabia que existiam. Agora meu negócio está formalizado, organizado e crescendo. Recomendo fortemente!",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Fundadora",
    company: "Inova Tech",
    content: "A JDA Consult nos guiou durante todo o processo de validação do nosso modelo de negócio e nos preparou para apresentações a investidores. O resultado foi um aporte que superou nossas expectativas. A combinação de conhecimento jurídico e estratégico é imbatível!",
    rating: 5
  },
  {
    id: 4,
    name: "Roberto Almeida",
    role: "Diretor Financeiro",
    company: "Saúde Digital",
    content: "Buscávamos uma consultoria que entendesse o ambiente regulatório da saúde e encontramos muito mais na JDA. Sua orientação nos ajudou a evitar armadilhas jurídicas enquanto desenvolvíamos nosso produto, economizando tempo e recursos valiosos.",
    rating: 5
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Empreendedora",
    company: "Espaço Bem-Estar",
    content: "Formalizar meu negócio como MEI parecia complicado, mas a JDA tornou o processo simples e rápido. Além disso, recebi orientações valiosas sobre como gerenciar meu pequeno negócio e maximizar meus benefícios fiscais.",
    rating: 5
  },
  {
    id: 6,
    name: "Lucas Oliveira",
    role: "Co-fundador",
    company: "EduTech Startup",
    content: "A análise de mercado realizada pela JDA nos proporcionou insights que mudaram completamente nossa estratégia de entrada no mercado. O resultado foi uma adoção mais rápida pelos clientes e menor custo de aquisição.",
    rating: 5
  },
  {
    id: 7,
    name: "Juliana Santos",
    role: "Arquiteta",
    company: "MEI",
    content: "Como profissional autônoma que se formalizou como MEI, eu precisava de orientação clara sobre minhas obrigações fiscais e possibilidades de crescimento. A JDA me forneceu um roteiro completo e continua me apoiando conforme meu negócio cresce.",
    rating: 5
  },
  {
    id: 8,
    name: "Pedro Rocha",
    role: "CEO",
    company: "Logística Inteligente",
    content: "Nossa startup estava enfrentando desafios na definição de métricas de desempenho. A experiência da JDA em gestão hospitalar trouxe uma perspectiva única para nossos processos, resultando em maior eficiência operacional.",
    rating: 5
  },
  {
    id: 9,
    name: "Camila Vasconcelos",
    role: "Diretora de Operações",
    company: "FoodTech",
    content: "A consultoria da JDA nos ajudou a implementar processos operacionais eficientes desde o início, evitando retrabalho e permitindo escalar de forma sustentável. Sua abordagem prática e objetiva fez toda a diferença.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Depoimentos"
        subtitle="Veja o que nossos clientes dizem sobre nossa consultoria especializada"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
      />

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Testimonial */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 italic text-center mb-8">
              "A consultoria da JDA transformou completamente nossa abordagem de negócio. A combinação única de conhecimento jurídico especializado com expertise em gestão hospitalar nos proporcionou insights valiosos que não encontraríamos em consultores tradicionais."
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-jda-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                MS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Marcelo Souza</h3>
              <p className="text-gray-600">CEO, HealthTech Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jda text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seja o próximo caso de sucesso
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Junte-se aos clientes satisfeitos que transformaram seus negócios com nossa consultoria especializada.
            </p>
            <Button asChild size="lg" className="bg-white text-jda hover:bg-gray-100">
              <Link to="/contato">Agende uma Consulta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
