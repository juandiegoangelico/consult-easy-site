
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: string;
  slug: string;
  category: string;
  authorName: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  slug,
  category,
  authorName,
}: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col fade-in-section">
      {imageUrl && (
        <Link to={`/blog/${slug}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-sm text-jda-accent font-medium mr-3">
            {category}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-jda transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">Por {authorName}</span>
          <Link
            to={`/blog/${slug}`}
            className="inline-flex items-center text-jda hover:text-jda-accent transition-colors font-medium"
          >
            Leia mais <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
