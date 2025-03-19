import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Calendar, UserCheck, Shield, Smile } from "lucide-react"
import { Container } from "./ui/container"

export function Pillars() {
  const pillars = [
    {
      icon: Calendar,
      title: "Experiência de 60 anos",
      description: "Tradição e conhecimento acumulado para oferecer o melhor serviço contábil do mercado."
    },
    {
      icon: UserCheck,
      title: "Contador exclusivo",
      description: "Um profissional dedicado para atender todas as necessidades da sua empresa."
    },
    {
      icon: Shield,
      title: "Segurança para seu negócio",
      description: "Processos seguros e conformidade total com a legislação para sua tranquilidade."
    },
    {
      icon: Smile,
      title: "Satisfação garantida",
      description: "Compromisso com a excelência e satisfação total dos nossos clientes."
    }
  ]

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6a11e8] mb-12">
          Por que somos diferentes?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#6a11e8]/10 rounded-full">
                      <Icon className="w-8 h-8 text-[#6a11e8]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#6a11e8] mb-2">
                    {pillar.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
} 