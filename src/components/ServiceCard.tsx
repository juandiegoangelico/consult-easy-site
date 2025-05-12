
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
  delay?: number;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  delay = 0,
}: ServiceCardProps) => {
  const cardContent = (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-jda-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {link && (
        <div className="mt-auto pt-2">
          <Link
            to={link}
            className="inline-flex items-center text-jda font-medium hover:text-jda-accent transition-colors"
          >
            Saiba mais
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <div className="fade-in-section">
        {cardContent}
      </div>
    );
  }

  return <div className="fade-in-section">{cardContent}</div>;
};

export default ServiceCard;
