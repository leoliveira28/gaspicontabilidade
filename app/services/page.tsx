import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Container } from "../components/ui/container"

export default function ServicesPage() {
  const services = [
    {
      title: "Abertura de Empresa",
      description: "Assessoria completa para abrir sua empresa com agilidade e segurança. Analisamos o melhor regime tributário e cuidamos de toda a documentação.",
      link: "/services/abertura-empresa"
    },
    {
      title: "Contabilidade Mensal",
      description: "Gestão contábil completa com emissão de relatórios gerenciais, demonstrações contábeis e análise financeira personalizada.",
      link: "/services/contabilidade-mensal"
    },
    {
      title: "Departamento Fiscal",
      description: "Controle e emissão de notas fiscais, apuração de impostos, planejamento tributário e acompanhamento de obrigações fiscais.",
      link: "/services/departamento-fiscal"
    },
    {
      title: "Departamento Pessoal",
      description: "Gestão completa da folha de pagamento, admissões, demissões, férias e todos os processos relacionados aos colaboradores.",
      link: "/services/departamento-pessoal"
    },
    {
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para tomada de decisões, análise de viabilidade e consultoria especializada para o crescimento do seu negócio.",
      link: "/services/consultoria-empresarial"
    },
    {
      title: "Recuperação de Impostos",
      description: "Análise detalhada para identificar oportunidades de recuperação de tributos pagos indevidamente e créditos tributários.",
      link: "/services/recuperacao-impostos"
    }
  ]

  return (
    <main className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções contábeis completas para impulsionar o sucesso do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <h3 className="text-2xl font-semibold text-[#6a11e8]">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={service.link} className="w-full">
                  <Button 
                    className="w-full bg-[#53b7be] hover:bg-[#53b7be]/90 text-white"
                  >
                    Saiba mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  )
} 