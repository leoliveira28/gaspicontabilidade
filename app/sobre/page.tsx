import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Container } from "../components/ui/container"

export default function AboutPage() {
  const team = [
    {
      name: "Roberto Gaspi",
      role: "Sócio Fundador",
      image: "/team/roberto.jpg",
      description: "Mais de 30 anos de experiência em contabilidade empresarial e gestão tributária."
    },
    {
      name: "Ana Silva",
      role: "Diretora de Operações",
      image: "/team/ana.jpg",
      description: "Especialista em gestão de processos contábeis e liderança de equipes."
    },
    {
      name: "Carlos Santos",
      role: "Contador Sênior",
      image: "/team/carlos.jpg",
      description: "Especializado em consultoria tributária e planejamento fiscal."
    },
    {
      name: "Mariana Costa",
      role: "Especialista Fiscal",
      image: "/team/mariana.jpg",
      description: "Expertise em tributos e obrigações acessórias."
    }
  ]

  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Sobre a Gaspi Contabilidade
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 60 anos construindo histórias de sucesso junto com nossos clientes
          </p>
        </div>

        {/* História */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#6a11e8] mb-6">
            Nossa História
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Fundada em 1963, a Gaspi Contabilidade nasceu do sonho de oferecer serviços contábeis de excelência para empresas de todos os portes. Ao longo de mais de seis décadas, construímos uma trajetória sólida, baseada em valores éticos e compromisso com a qualidade.
            </p>
            <p>
              Nossa jornada é marcada por constante evolução e adaptação às mudanças do mercado, sempre mantendo nosso compromisso com a excelência e o atendimento personalizado que nos tornou referência no setor.
            </p>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#6a11e8] mb-4">
              Missão
            </h2>
            <p className="text-gray-600">
              Oferecer soluções contábeis inovadoras e personalizadas, contribuindo para o crescimento sustentável dos nossos clientes através de um atendimento de excelência.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#6a11e8] mb-4">
              Visão
            </h2>
            <p className="text-gray-600">
              Ser reconhecida como referência nacional em contabilidade empresarial, destacando-se pela inovação, qualidade e compromisso com o sucesso dos clientes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#6a11e8] mb-4">
              Valores
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Ética e transparência</li>
              <li>• Excelência no atendimento</li>
              <li>• Inovação constante</li>
              <li>• Compromisso com resultados</li>
              <li>• Valorização das pessoas</li>
            </ul>
          </div>
        </section>

        {/* Equipe */}
        <section>
          <h2 className="text-3xl font-bold text-[#6a11e8] mb-8 text-center">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-[#6a11e8]">
                      {member.name}
                    </h3>
                    <p className="text-[#53b7be] font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
} 