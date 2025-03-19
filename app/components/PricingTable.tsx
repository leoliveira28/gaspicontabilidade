import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Container } from "./ui/container"

export function PricingTable() {
  const services = [
    {
      name: "Contador Exclusivo",
      simplesNacional: "✓ Atendimento personalizado",
      lucroPresumido: "✓ Atendimento VIP com prioridade"
    },
    {
      name: "Emissão de Notas Fiscais",
      simplesNacional: "✓ Ilimitadas",
      lucroPresumido: "✓ Ilimitadas + Gestão completa"
    },
    {
      name: "Folha de Pagamento",
      simplesNacional: "✓ Até 5 funcionários",
      lucroPresumido: "✓ Até 15 funcionários"
    },
    {
      name: "Consultoria Tributária",
      simplesNacional: "✓ Mensal",
      lucroPresumido: "✓ Semanal + Planejamento Tributário"
    },
    {
      name: "Relatórios Gerenciais",
      simplesNacional: "✓ Básicos",
      lucroPresumido: "✓ Avançados + DRE mensal"
    },
    {
      name: "Preço Mensal",
      simplesNacional: "A partir de R$ 299,00",
      lucroPresumido: "A partir de R$ 599,00"
    }
  ]

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#6a11e8] mb-12">
          Escolha o melhor plano para sua empresa
        </h2>

        <div className="rounded-xl border shadow-lg overflow-hidden mb-8">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/3 font-bold text-gray-900">Serviço</TableHead>
                <TableHead className="w-1/3 font-bold text-[#53b7be]">Simples Nacional</TableHead>
                <TableHead className="w-1/3 font-bold text-[#ef8933]">Lucro Presumido</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className={service.name === "Preço Mensal" ? "text-[#53b7be] font-bold" : ""}>
                    {service.simplesNacional}
                  </TableCell>
                  <TableCell className={service.name === "Preço Mensal" ? "text-[#ef8933] font-bold" : ""}>
                    {service.lucroPresumido}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#53b7be] hover:bg-[#53b7be]/90 text-white"
          >
            Compare e veja como vale a pena ter um contador pra chamar de seu
          </Button>
        </div>
      </Container>
    </section>
  )
} 