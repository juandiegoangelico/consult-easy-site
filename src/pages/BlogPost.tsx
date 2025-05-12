
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Share, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import { useEffect } from "react";

// Mock blog posts data (same as in Blog.tsx)
const blogPosts = [
  {
    id: "1",
    title: "5 Estratégias para Validar seu Modelo de Negócio",
    excerpt: "Descubra metodologias eficazes para validar seu modelo de negócio antes de investir recursos significativos.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    date: "15 Maio, 2025",
    slug: "estrategias-validar-modelo-negocio",
    category: "Startups",
    authorName: "JDA Consult",
    content: `
      <p>Validar seu modelo de negócio é uma etapa crucial antes de investir tempo e recursos significativos no desenvolvimento de uma startup. Neste artigo, apresentamos cinco estratégias eficazes para validar seu modelo de negócio de forma eficiente.</p>
      
      <h2>1. Entrevistas com Potenciais Clientes</h2>
      <p>Antes de desenvolver qualquer produto ou serviço, converse diretamente com seus potenciais clientes. Realize entrevistas estruturadas para entender suas dores, necessidades e expectativas. Pergunte sobre problemas específicos que eles enfrentam e como resolvem atualmente.</p>
      <p>Dica: Evite perguntas tendenciosas que confirmem suas hipóteses. O objetivo é obter insights genuínos, não validação artificial.</p>
      
      <h2>2. MVP (Produto Mínimo Viável)</h2>
      <p>Crie uma versão simplificada do seu produto ou serviço com o mínimo de recursos necessários para resolver o problema principal. O MVP permite testar suas hipóteses fundamentais com investimento reduzido.</p>
      <p>Exemplo prático: Uma startup de delivery não precisa desenvolver um aplicativo completo inicialmente. Pode começar com um formulário online simples e realizar as entregas manualmente enquanto valida a demanda.</p>
      
      <h2>3. Teste A/B</h2>
      <p>Compare diferentes versões do seu produto ou marketing para determinar qual gera melhores resultados. Isso é particularmente útil para testar elementos específicos do seu modelo de negócio, como preços, funcionalidades ou mensagens de marketing.</p>
      
      <h2>4. Smoke Test</h2>
      <p>Crie uma landing page descrevendo seu produto e meça o interesse através de inscrições ou pré-vendas. Esta técnica permite validar a demanda antes mesmo de ter um produto pronto.</p>
      <p>Passos para um smoke test eficaz:</p>
      <ul>
        <li>Crie uma landing page atraente descrevendo seu produto/serviço</li>
        <li>Implemente um formulário de captura de e-mails ou botão de pré-venda</li>
        <li>Direcione tráfego qualificado para a página (via anúncios, redes sociais, etc.)</li>
        <li>Analise as métricas de conversão</li>
      </ul>
      
      <h2>5. Concierge MVP</h2>
      <p>Entregue seu serviço manualmente para um pequeno grupo de clientes iniciais, permitindo interação direta e feedback constante enquanto refina sua oferta.</p>
      <p>Esta abordagem permite:</p>
      <ul>
        <li>Compreensão profunda das necessidades dos clientes</li>
        <li>Ajustes rápidos no modelo de negócio</li>
        <li>Construção de relacionamentos valiosos com early adopters</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>A validação do modelo de negócio não é um evento único, mas um processo contínuo. Combine estas estratégias e esteja disposto a pivotar com base nos insights obtidos. Lembre-se: falhar rápido e barato é melhor que investir anos e recursos significativos em uma ideia que o mercado não deseja.</p>
      
      <p>Precisa de ajuda para validar seu modelo de negócio? A JDA Consult oferece consultoria especializada para startups em todas as fases. Entre em contato conosco para saber mais.</p>
    `
  },
  {
    id: "2",
    title: "Guia Completo para MEI: Direitos e Obrigações",
    excerpt: "Tudo o que você precisa saber sobre os direitos, benefícios e obrigações do Microempreendedor Individual.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    date: "02 Maio, 2025",
    slug: "guia-completo-mei-direitos-obrigacoes",
    category: "MEI",
    authorName: "JDA Consult",
    content: `
      <p>O Microempreendedor Individual (MEI) é uma figura importante no cenário empreendedor brasileiro, oferecendo diversas vantagens para pequenos negócios. Neste guia completo, abordaremos os principais direitos, benefícios e obrigações do MEI.</p>
      
      <h2>O que é o MEI?</h2>
      <p>O Microempreendedor Individual é uma modalidade empresarial simplificada criada pela Lei Complementar nº 128/2008, que permite a formalização de pequenos negócios com faturamento de até R$ 81.000,00 por ano (valor atualizado).</p>
      
      <h2>Direitos e Benefícios</h2>
      
      <h3>1. Simplificação Fiscal</h3>
      <p>Um dos principais benefícios do MEI é o regime tributário simplificado através do DAS (Documento de Arrecadação do Simples Nacional), que unifica impostos federais, estaduais e municipais em uma única guia mensal de valor fixo.</p>
      
      <h3>2. Benefícios Previdenciários</h3>
      <p>Ao pagar o DAS em dia, o MEI tem acesso a diversos benefícios previdenciários, incluindo:</p>
      <ul>
        <li>Aposentadoria por idade</li>
        <li>Aposentadoria por invalidez</li>
        <li>Auxílio-doença</li>
        <li>Salário-maternidade</li>
        <li>Pensão por morte (para a família)</li>
        <li>Auxílio-reclusão (para a família)</li>
      </ul>
      
      <h3>3. Facilitação de Crédito</h3>
      <p>MEIs têm acesso a linhas de crédito específicas em bancos públicos e privados, com taxas mais acessíveis que as oferecidas a pessoas físicas.</p>
      
      <h3>4. Isenção de Taxas para Registro</h3>
      <p>A formalização como MEI é gratuita, sem custos de registro empresarial.</p>
      
      <h3>5. Emissão de Notas Fiscais</h3>
      <p>O MEI pode emitir notas fiscais, o que facilita a prestação de serviços para empresas e órgãos públicos.</p>
      
      <h2>Obrigações do MEI</h2>
      
      <h3>1. Pagamento do DAS</h3>
      <p>O MEI deve pagar mensalmente o DAS até o dia 20 de cada mês, com valores que variam conforme a atividade exercida.</p>
      
      <h3>2. Declaração Anual (DASN-SIMEI)</h3>
      <p>Anualmente, é obrigatória a entrega da Declaração Anual do Simples Nacional do MEI (DASN-SIMEI) até o final de maio do ano seguinte ao exercício.</p>
      
      <h3>3. Controle Financeiro Simplificado</h3>
      <p>É necessário manter um controle mensal do faturamento através do Relatório Mensal de Receitas Brutas, anexando notas fiscais de compras e vendas.</p>
      
      <h3>4. Limites de Faturamento</h3>
      <p>O MEI deve respeitar o limite de faturamento anual. Caso ultrapasse, precisará migrar para outra categoria empresarial.</p>
      
      <h3>5. Contratação de Funcionário</h3>
      <p>Se optar pela contratação de um funcionário (limite máximo permitido), o MEI deve cumprir todas as obrigações trabalhistas correspondentes.</p>
      
      <h2>Atividades Permitidas</h2>
      <p>Nem todas as atividades podem ser exercidas como MEI. A legislação estabelece uma lista de ocupações permitidas, que incluem comércio, indústria e serviços de natureza não intelectual.</p>
      
      <h2>Como a JDA Consult pode ajudar</h2>
      <p>Nossa consultoria especializada oferece suporte completo para MEIs em Florianópolis e região, incluindo:</p>
      <ul>
        <li>Orientação para formalização e alterações cadastrais</li>
        <li>Regularização de pendências fiscais</li>
        <li>Planejamento para crescimento sustentável do negócio</li>
        <li>Transição para outros modelos empresariais quando necessário</li>
      </ul>
      
      <p>Entre em contato conosco para uma consultoria personalizada e maximize os benefícios do seu MEI!</p>
    `
  },
  {
    id: "3",
    title: "Como Preparar sua Startup para Captar Investimentos",
    excerpt: "Passos essenciais para estruturar sua startup e se preparar adequadamente para apresentações a investidores.",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
    date: "20 Abril, 2025",
    slug: "preparar-startup-captar-investimentos",
    category: "Investimentos",
    authorName: "JDA Consult",
    content: `<p>Este é o conteúdo do artigo sobre como preparar sua startup para captar investimentos...</p>`
  },
  {
    id: "4",
    title: "Aspectos Jurídicos Essenciais para Startups",
    excerpt: "Conheça os principais pontos jurídicos que toda startup deve considerar desde sua fundação.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    date: "10 Abril, 2025",
    slug: "aspectos-juridicos-startups",
    category: "Jurídico",
    authorName: "JDA Consult",
    content: `<p>Este é o conteúdo do artigo sobre aspectos jurídicos essenciais para startups...</p>`
  },
  {
    id: "5",
    title: "Indicadores de Desempenho: KPIs para o Sucesso da sua Startup",
    excerpt: "Aprenda quais métricas são essenciais para monitorar e impulsionar o crescimento da sua startup.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    date: "01 Abril, 2025",
    slug: "kpis-sucesso-startup",
    category: "Gestão",
    authorName: "JDA Consult",
    content: `<p>Este é o conteúdo do artigo sobre KPIs para o sucesso da sua startup...</p>`
  },
  {
    id: "6",
    title: "Benefícios Fiscais para MEI em Florianópolis",
    excerpt: "Descubra incentivos fiscais e programas de apoio disponíveis para MEIs na região de Florianópolis.",
    imageUrl: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?q=80&w=2070&auto=format&fit=crop",
    date: "25 Março, 2025",
    slug: "beneficios-fiscais-mei-florianopolis",
    category: "MEI",
    authorName: "JDA Consult",
    content: `<p>Este é o conteúdo do artigo sobre benefícios fiscais para MEI em Florianópolis...</p>`
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="mb-6">O artigo que você está procurando não existe ou foi removido.</p>
            <Button asChild className="bg-jda hover:bg-jda-light">
              <Link to="/blog">Voltar para o Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-16 bg-jda">
        <div className="container-custom">
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Por {post.authorName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="relative -mt-8">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="max-w-3xl mx-auto">
                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 flex items-center">
                  <Tag className="h-5 w-5 text-gray-500 mr-3" />
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {post.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      Consultoria
                    </span>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {post.category === "MEI" ? "Microempreendedor" : "Inovação"}
                    </span>
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Share className="h-5 w-5 mr-2" />
                    Compartilhe este artigo
                  </h3>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Precisa de ajuda?
                </h3>
                <p className="text-gray-600 mb-6">
                  A JDA Consult oferece consultoria especializada em {post.category.toLowerCase()}.
                  Entre em contato para saber como podemos ajudar seu negócio.
                </p>
                <Button asChild className="w-full bg-jda hover:bg-jda-light">
                  <Link to="/contato">Agende uma Consultoria</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-jda-gray">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Artigos Relacionados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-jda text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Entre em contato com a JDA Consult e descubra como podemos ajudar 
              sua startup ou MEI a alcançar todo o seu potencial.
            </p>
            <Button asChild size="lg" className="bg-white text-jda hover:bg-gray-100">
              <Link to="/contato">Agende uma Consultoria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
