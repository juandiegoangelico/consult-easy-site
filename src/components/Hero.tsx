import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  backgroundClass?: string;
  imageUrl?: string;
  isHomepage?: boolean;
}

const Hero = ({
  title,
  subtitle,
  cta,
  secondaryCta,
  backgroundClass = "bg-gradient-to-r from-jda-dark via-jda to-jda-light",
  imageUrl,
  isHomepage = false,
}: HeroProps) => {
  if (isHomepage) {
    return (
      <section className={`pt-32 pb-16 ${backgroundClass}`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <h1 className="font-bold mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {cta && (
                  <Button asChild size="lg" className="bg-jda-accent hover:bg-jda-accent-light text-white">
                    <Link to={cta.link}>{cta.text}</Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="JDA Consult"
                  className="rounded-lg shadow-lg max-w-full md:max-w-md lg:max-w-lg fade-in-section"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`pt-32 pb-16 ${backgroundClass}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {subtitle}
          </p>
          {cta && (
            <Button asChild size="lg" className="bg-jda-accent hover:bg-jda-accent-light text-white">
              <Link to={cta.link}>{cta.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
