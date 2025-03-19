import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react"
import { Container } from "./ui/container"

export function Benefits() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Seu contador resolve tudo.",
      description: "Nossos contadores são especialistas e cuidam de toda a burocracia para você focar no que realmente importa: seu negócio."
    },
    {
      icon: TrendingUp,
      title: "Entregamos qualidade para você ficar tranquilo",
      description: "Processos padronizados e equipe altamente capacitada para garantir a excelência em todos os serviços prestados."
    },
    {
      icon: ShieldCheck,
      title: "Temos o melhor índice de aprovação do mercado",
      description: "Mais de 98% dos nossos clientes estão satisfeitos com nossos serviços e nos recomendam."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6a11e8] mb-12">
          Por que escolher nossa contabilidade?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-3 bg-[#6a11e8]/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#6a11e8]" />
                  </div>
                  <CardTitle className="text-xl text-[#6a11e8] mb-2">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
} 