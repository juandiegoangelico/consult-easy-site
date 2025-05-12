
import { useState } from "react";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    title: "5 Estratégias para Validar seu Modelo de Negócio",
    excerpt: "Descubra metodologias eficazes para validar seu modelo de negócio antes de investir recursos significativos.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    date: "15 Maio, 2025",
    slug: "estrategias-validar-modelo-negocio",
    category: "Startups",
    authorName: "JDA Consult"
  },
  {
    id: "2",
    title: "Guia Completo para MEI: Direitos e Obrigações",
    excerpt: "Tudo o que você precisa saber sobre os direitos, benefícios e obrigações do Microempreendedor Individual.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    date: "02 Maio, 2025",
    slug: "guia-completo-mei-direitos-obrigacoes",
    category: "MEI",
    authorName: "JDA Consult"
  },
  {
    id: "3",
    title: "Como Preparar sua Startup para Captar Investimentos",
    excerpt: "Passos essenciais para estruturar sua startup e se preparar adequadamente para apresentações a investidores.",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
    date: "20 Abril, 2025",
    slug: "preparar-startup-captar-investimentos",
    category: "Investimentos",
    authorName: "JDA Consult"
  },
  {
    id: "4",
    title: "Aspectos Jurídicos Essenciais para Startups",
    excerpt: "Conheça os principais pontos jurídicos que toda startup deve considerar desde sua fundação.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    date: "10 Abril, 2025",
    slug: "aspectos-juridicos-startups",
    category: "Jurídico",
    authorName: "JDA Consult"
  },
  {
    id: "5",
    title: "Indicadores de Desempenho: KPIs para o Sucesso da sua Startup",
    excerpt: "Aprenda quais métricas são essenciais para monitorar e impulsionar o crescimento da sua startup.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    date: "01 Abril, 2025",
    slug: "kpis-sucesso-startup",
    category: "Gestão",
    authorName: "JDA Consult"
  },
  {
    id: "6",
    title: "Benefícios Fiscais para MEI em Florianópolis",
    excerpt: "Descubra incentivos fiscais e programas de apoio disponíveis para MEIs na região de Florianópolis.",
    imageUrl: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?q=80&w=2070&auto=format&fit=crop",
    date: "25 Março, 2025",
    slug: "beneficios-fiscais-mei-florianopolis",
    category: "MEI",
    authorName: "JDA Consult"
  }
];

// Unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Blog JDA Consult"
        subtitle="Insights, dicas e estratégias para startups e microempreendedores individuais"
        backgroundClass="bg-gradient-to-r from-jda-dark via-jda to-jda-light"
      />

      {/* Blog Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:w-1/2">
                <Input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-jda hover:bg-jda-light" : ""}
                >
                  Todos
                </Button>
                
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-jda hover:bg-jda-light" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar sua pesquisa ou filtros para encontrar o que procura.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-jda-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Inscreva-se em nossa Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Receba nossos artigos mais recentes, dicas exclusivas e atualizações diretamente na sua caixa de entrada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="border-gray-300"
              />
              <Button className="bg-jda hover:bg-jda-light whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
