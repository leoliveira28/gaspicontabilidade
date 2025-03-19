import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Container } from "../components/ui/container"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Como se preparar para a declaração do Imposto de Renda 2024",
      summary: "Confira as principais novidades e dicas para fazer sua declaração de IR sem dor de cabeça.",
      date: "15 de março de 2024",
      image: "/blog/ir2024.jpg",
      category: "Impostos",
      slug: "preparacao-ir-2024"
    },
    {
      id: 2,
      title: "Mudanças no eSocial: o que sua empresa precisa saber",
      summary: "Entenda as principais alterações no eSocial e como elas afetam a gestão do seu negócio.",
      date: "10 de março de 2024",
      image: "/blog/esocial.jpg",
      category: "Departamento Pessoal",
      slug: "mudancas-esocial-2024"
    },
    {
      id: 3,
      title: "Planejamento tributário: estratégias para 2024",
      summary: "Descubra como reduzir legalmente a carga tributária da sua empresa com um planejamento eficiente.",
      date: "5 de março de 2024",
      image: "/blog/planejamento-tributario.jpg",
      category: "Tributário",
      slug: "planejamento-tributario-2024"
    },
    {
      id: 4,
      title: "MEI: novos limites e obrigações para 2024",
      summary: "Saiba tudo sobre as mudanças nas regras do MEI e como elas podem impactar seu negócio.",
      date: "1 de março de 2024",
      image: "/blog/mei.jpg",
      category: "MEI",
      slug: "mei-mudancas-2024"
    }
  ]

  const categories = [
    { name: "Impostos", count: 12 },
    { name: "Contabilidade", count: 8 },
    { name: "Departamento Pessoal", count: 6 },
    { name: "Tributário", count: 10 },
    { name: "MEI", count: 5 },
    { name: "Gestão Empresarial", count: 7 }
  ]

  const recentPosts = articles.slice(0, 3)

  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Blog da Gaspi Contabilidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informação e conhecimento para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Artigos */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {article.image && (
                      <div className="md:w-1/3 relative h-48 md:h-auto">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="text-sm text-[#53b7be] mb-2">
                          {article.category} • {article.date}
                        </div>
                        <Link 
                          href={`/blog/${article.slug}`}
                          className="hover:text-[#6a11e8] transition-colors"
                        >
                          <h2 className="text-2xl font-semibold text-[#6a11e8]">
                            {article.title}
                          </h2>
                        </Link>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-gray-600">
                          {article.summary}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Barra Lateral */}
          <div className="space-y-8">
            {/* Categorias */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#6a11e8]">
                  Categorias
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <Link 
                        href={`/blog/categoria/${category.name.toLowerCase()}`}
                        className="flex justify-between items-center text-gray-600 hover:text-[#6a11e8] transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Artigos Recentes */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-[#6a11e8]">
                  Artigos Recentes
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id}>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="block hover:text-[#6a11e8] transition-colors"
                      >
                        <h3 className="font-medium text-gray-800">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {post.date}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  )
} 