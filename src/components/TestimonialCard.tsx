
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  avatarUrl,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 fade-in-section">
      <div className="flex items-center mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="mr-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-jda-light flex items-center justify-center text-white font-semibold">
              {name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}{company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
