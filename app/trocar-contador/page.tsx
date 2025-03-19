import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Clock, Calculator, FileText, Briefcase, PieChart } from "lucide-react"
import { Container } from "../components/ui/container"

export default function TrocarContadorPage() {
  const benefits = [
    {
      title: "Atendimento Personalizado",
      description: "Nossa equipe dedicada está sempre disponível para atender suas necessidades específicas, com comunicação clara e rápida.",
      icon: Shield
    },
    {
      title: "Tecnologia Avançada",
      description: "Utilizamos as mais modernas ferramentas e sistemas para garantir eficiência e precisão em todos os processos.",
      icon: Calculator
    },
    {
      title: "Economia Real",
      description: "Através de um planejamento tributário estratégico, ajudamos sua empresa a economizar de forma legal e segura.",
      icon: PieChart
    },
    {
      title: "Compliance Total",
      description: "Mantemos sua empresa em dia com todas as obrigações fiscais e contábeis, evitando multas e problemas futuros.",
      icon: FileText
    }
  ]

  const transitionSteps = [
    {
      title: "Análise Inicial Gratuita",
      description: "Realizamos um diagnóstico completo da situação atual da sua empresa, identificando pontos de melhoria sem nenhum custo.",
      details: [
        "Avaliação da documentação atual",
        "Identificação de pendências",
        "Análise do regime tributário",
        "Levantamento de oportunidades de economia"
      ]
    },
    {
      title: "Processo de Transição",
      description: "Cuidamos de toda a burocracia necessária para a transferência, sem que você precise se preocupar.",
      details: [
        "Transferência de responsabilidade técnica",
        "Comunicação com contador anterior",
        "Organização da documentação",
        "Regularização de pendências"
      ]
    },
    {
      title: "Implementação",
      description: "Iniciamos os trabalhos com sua empresa, estabelecendo processos eficientes desde o primeiro dia.",
      details: [
        "Configuração dos sistemas",
        "Treinamento da sua equipe",
        "Definição de processos",
        "Início do atendimento contábil"
      ]
    }
  ]

  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Mude para uma Contabilidade que se Importa com Você
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a contabilidade da sua empresa com um serviço que realmente faz a diferença. 
            Sem burocracia, sem dor de cabeça.
          </p>
        </div>

        {/* CTA Principal */}
        <div className="text-center mb-16">
          <Button 
            size="lg"
            className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white px-8 py-6 text-lg"
          >
            Solicitar Troca
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Benefícios */}
        <h2 className="text-3xl font-semibold text-[#6a11e8] text-center mb-8">
          Por que Escolher Nossa Contabilidade?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6a11e8]/5 rounded-bl-full" />
              <CardHeader>
                <h3 className="text-2xl font-semibold text-[#6a11e8] flex items-center gap-3">
                  <benefit.icon className="h-8 w-8 text-[#ef8933]" />
                  {benefit.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Processo de Transição */}
        <h2 className="text-3xl font-semibold text-[#6a11e8] text-center mb-8">
          Processo de Transição Simplificado
        </h2>
        <div className="space-y-8">
          {transitionSteps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6a11e8]/5 rounded-bl-full" />
              <CardHeader>
                <h3 className="text-2xl font-semibold text-[#6a11e8] flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ef8933] text-white text-sm">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#ef8933]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção Final */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-[#6a11e8] mb-4">
            Pronto para uma Contabilidade Melhor?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Dê o primeiro passo para transformar a gestão contábil da sua empresa. 
            Nossa equipe está pronta para fazer uma transição suave e sem complicações.
          </p>
          <Button 
            size="lg"
            className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white px-8"
          >
            Agende uma Consulta Gratuita
          </Button>
        </div>
      </Container>
    </main>
  )
} 