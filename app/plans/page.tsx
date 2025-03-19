import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "../components/ui/container"
import { List, ListItem } from "../components/ui/list"

export default function PlansPage() {
  const plans = [
    {
      title: "MEI",
      price: "R$ 149,90",
      description: "Ideal para Microempreendedores Individuais",
      features: [
        "Contador dedicado",
        "Emissão de notas fiscais",
        "Declaração anual do MEI",
        "Suporte por WhatsApp",
        "Alterações cadastrais",
        "Consultoria básica"
      ]
    },
    {
      title: "Simples Nacional",
      price: "R$ 299,90",
      description: "Perfeito para pequenas empresas",
      features: [
        "Contador dedicado",
        "Emissão ilimitada de notas",
        "Folha de pagamento (até 5 funcionários)",
        "Suporte prioritário",
        "Consultoria tributária mensal",
        "Relatórios gerenciais básicos",
        "Gestão de certidões",
        "Parcelamento de tributos"
      ],
      featured: true
    },
    {
      title: "Lucro Presumido",
      price: "R$ 599,90",
      description: "Para empresas em crescimento",
      features: [
        "Contador dedicado",
        "Emissão ilimitada de notas",
        "Folha de pagamento (até 15 funcionários)",
        "Suporte VIP",
        "Consultoria tributária semanal",
        "Relatórios gerenciais avançados",
        "Planejamento tributário",
        "Gestão fiscal completa",
        "Reuniões mensais"
      ]
    }
  ]

  return (
    <main className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio e conte com nossa expertise para crescer com segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "flex flex-col",
                plan.featured && "border-[#6a11e8] border-2 shadow-lg relative"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6a11e8] text-white px-4 py-1 rounded-full text-sm">
                  Mais Popular
                </div>
              )}
              <CardHeader>
                <h2 className="text-2xl font-semibold text-[#6a11e8] mb-2">
                  {plan.title}
                </h2>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-[#53b7be]">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/mês</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <List className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} className="text-gray-600">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-[#ef8933] hover:bg-[#ef8933]/90 text-white"
                >
                  Fale Conosco
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <Button 
            className="bg-[#53b7be] hover:bg-[#53b7be]/90 text-white"
          >
            Entre em contato para um orçamento
          </Button>
        </div>
      </Container>
    </main>
  )
} 