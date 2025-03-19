import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, Coffee, Trophy, Users, Briefcase, GraduationCap, Smile, Target } from "lucide-react"
import { Container } from "../components/ui/container"

export default function TrabalheConoscoPage() {
  const culturalValues = [
    {
      title: "Excelência",
      description: "Buscamos a excelência em tudo que fazemos, sempre com foco na qualidade e na satisfação do cliente.",
      icon: Trophy
    },
    {
      title: "Colaboração",
      description: "Trabalhamos em equipe, compartilhando conhecimento e apoiando o crescimento uns dos outros.",
      icon: Users
    },
    {
      title: "Desenvolvimento",
      description: "Investimos no crescimento profissional e pessoal de nossa equipe com treinamentos e mentoria.",
      icon: GraduationCap
    },
    {
      title: "Bem-estar",
      description: "Valorizamos o equilíbrio entre trabalho e vida pessoal, promovendo um ambiente saudável e acolhedor.",
      icon: Heart
    }
  ]

  const benefits = [
    "Plano de saúde e odontológico",
    "Vale refeição ou alimentação",
    "Gympass",
    "Programa de participação nos resultados",
    "Horário flexível",
    "Day off no aniversário",
    "Plano de carreira estruturado",
    "Programa de desenvolvimento profissional"
  ]

  const openPositions = [
    {
      title: "Contador(a) Sênior",
      department: "Contabilidade",
      type: "Tempo Integral",
      experience: "5+ anos",
      description: "Procuramos um contador sênior com experiência em gestão de equipe e atendimento a clientes de médio e grande porte."
    },
    {
      title: "Analista Fiscal Pleno",
      department: "Fiscal",
      type: "Tempo Integral",
      experience: "3+ anos",
      description: "Buscamos profissional com experiência em rotinas fiscais, apuração de impostos e obrigações acessórias."
    },
    {
      title: "Assistente de DP",
      department: "Departamento Pessoal",
      type: "Tempo Integral",
      experience: "1+ ano",
      description: "Vaga para profissional com experiência em rotinas de departamento pessoal e sistemas de folha."
    }
  ]

  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Faça Parte do Nosso Time
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se a uma equipe apaixonada por contabilidade e comprometida com a excelência.
            Aqui você encontra oportunidades para crescer e se desenvolver.
          </p>
        </div>

        {/* Valores e Cultura */}
        <h2 className="text-3xl font-semibold text-[#6a11e8] text-center mb-8">
          Nossa Cultura
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {culturalValues.map((value, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6a11e8]/5 rounded-bl-full" />
              <CardHeader>
                <h3 className="text-2xl font-semibold text-[#6a11e8] flex items-center gap-3">
                  <value.icon className="h-8 w-8 text-[#ef8933]" />
                  {value.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefícios */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-semibold text-[#6a11e8] text-center mb-8">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <Coffee className="h-5 w-5 text-[#ef8933]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vagas Abertas */}
        <h2 className="text-3xl font-semibold text-[#6a11e8] text-center mb-8">
          Vagas Abertas
        </h2>
        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-2xl font-semibold text-[#6a11e8]">
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {position.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {position.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    {position.experience}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {position.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white"
                >
                  Candidatar-se
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Seção Final */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#6a11e8] mb-4">
            Não Encontrou uma Vaga Ideal?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos! Envie seu currículo para nosso banco de talentos 
            e entraremos em contato assim que surgir uma oportunidade compatível com seu perfil.
          </p>
          <Button 
            size="lg"
            className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white px-8"
          >
            Cadastrar Currículo
          </Button>
        </div>
      </Container>
    </main>
  )
} 