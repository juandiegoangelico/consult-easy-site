
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
