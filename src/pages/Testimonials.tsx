
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Microempreendedor Individual",
    company: "",
    content: "Como MEI, eu estava perdido com tantas regulamentações. A JDA me ajudou a entender meus direitos e a aproveitar os benefícios que eu nem sabia que existiam. Agora meu negócio está formalizado, organizado e crescendo. Recomendo fortemente!",
    rating: 5
  },
  {
    id: 2,
    name: "Fernanda Lima",
    role: "Empreendedora",
    company: "Espaço Bem-Estar",
    content: "Formalizar meu negócio como MEI parecia complicado, mas a JDA tornou o processo simples e rápido. Além disso, recebi orientações valiosas sobre como gerenciar meu pequeno negócio e maximizar meus benefícios fiscais.",
    rating: 5
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Arquiteta",
    company: "MEI",
    content: "Como profissional autônoma que se formalizou como MEI, eu precisava de orientação clara sobre minhas obrigações fiscais e possibilidades de crescimento. A JDA me forneceu um roteiro completo e continua me apoiando conforme meu negócio cresce.",
    rating: 5
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Consultor Freelancer",
    company: "MEI",
    content: "A JDA me orientou durante todo o processo de formalização como MEI e me ensinou a organizar minha contabilidade de forma simples. Hoje tenho mais segurança jurídica e consigo focar no que faço de melhor: atender meus clientes.",
    rating: 5
  },
  {
    id: 5,
    name: "Marina Costa",
    role: "Designer Gráfica",
    company: "MEI",
    content: "Estava trabalhando informalmente há anos e tinha medo de me formalizar. A JDA me mostrou que ser MEI era muito mais simples do que imaginava e me ajudou com todos os aspectos legais. Meu negócio nunca esteve tão organizado!",
    rating: 5
  },
  {
    id: 6,
    name: "Paulo Oliveira",
    role: "Eletricista",
    company: "MEI",
    content: "Como MEI na área de serviços, eu tinha dúvidas sobre contratos e responsabilidades. A consultoria da JDA esclareceu todas as questões legais e me deu segurança para crescer meu negócio de forma correta.",
    rating: 5
  },
  {
    id: 7,
    name: "Ana Paula",
    role: "Confeiteira",
    company: "MEI",
    content: "A JDA me ajudou não apenas com a formalização do MEI, mas também com dicas práticas de gestão financeira. Aprendi a separar as contas pessoais das do negócio e a planejar melhor meus investimentos.",
    rating: 5
  },
  {
    id: 8,
    name: "Ricardo Santos",
    role: "Fotógrafo",
    company: "MEI",
    content: "Trabalho como fotógrafo freelancer e a JDA me orientou sobre todos os aspectos legais do MEI. Agora posso emitir notas fiscais com tranquilidade e tenho respaldo jurídico para meus contratos de serviço.",
    rating: 5
  },
  {
    id: 9,
    name: "Carla Rodrigues",
    role: "Manicure",
    company: "MEI",
    content: "Sempre trabalhei em casa fazendo unhas, mas queria me formalizar. A JDA me mostrou como o MEI poderia beneficiar meu negócio e me ajudou com todo o processo. Agora tenho CNPJ e posso crescer com segurança!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Depoimentos"
        subtitle="Veja o que nossos clientes MEI dizem sobre nossa consultoria especializada"
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
              "A consultoria da JDA transformou completamente minha relação com a formalização do MEI. O que antes parecia complicado e assustador se tornou simples e acessível. Hoje tenho um negócio organizado e legal, com todo o suporte que preciso para crescer."
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-jda-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                MS
              </div>
              <h3 className="text-xl font-bold text-gray-800">Marcelo Souza</h3>
              <p className="text-gray-600">Consultor de TI, MEI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jda text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seja o próximo MEI de sucesso
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Junte-se aos microempreendedores que formalizaram seus negócios com nossa consultoria especializada em MEI.
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
