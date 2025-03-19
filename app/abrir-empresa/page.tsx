import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Container } from "../components/ui/container"

export default function AbrirEmpresaPage() {
  const steps = [
    {
      title: "Análise Inicial",
      description: "Realizamos uma análise completa do seu perfil e necessidades para definir o melhor tipo de empresa e regime tributário para o seu negócio.",
      details: [
        "Avaliação do perfil do empreendedor",
        "Definição da atividade empresarial",
        "Escolha do regime tributário ideal",
        "Planejamento tributário inicial"
      ]
    },
    {
      title: "Documentação",
      description: "Preparamos toda a documentação necessária para a abertura da sua empresa, cuidando de cada detalhe para evitar contratempos.",
      details: [
        "Elaboração do contrato social",
        "Preparação dos documentos necessários",
        "Registro na Junta Comercial",
        "Obtenção do CNPJ"
      ]
    },
    {
      title: "Registros e Licenças",
      description: "Cuidamos de todos os registros e licenças necessários para o funcionamento legal da sua empresa.",
      details: [
        "Inscrição estadual/municipal",
        "Alvarás e licenças",
        "Certificado digital",
        "Registros em órgãos específicos"
      ]
    },
    {
      title: "Início das Operações",
      description: "Oferecemos todo o suporte necessário para que você possa iniciar suas operações com segurança e tranquilidade.",
      details: [
        "Configuração fiscal",
        "Orientação tributária",
        "Emissão de notas fiscais",
        "Suporte contábil inicial"
      ]
    }
  ]

  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Abra sua Empresa com Segurança
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conte com nossa experiência para iniciar seu negócio de forma correta e sem dor de cabeça
          </p>
        </div>

        {/* CTA Principal */}
        <div className="text-center mb-16">
          <Button 
            size="lg"
            className="bg-[#53b7be] hover:bg-[#53b7be]/90 text-white px-8 py-6 text-lg"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Etapas do Processo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6a11e8]/5 rounded-bl-full" />
              <CardHeader>
                <h2 className="text-2xl font-semibold text-[#6a11e8] flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6a11e8] text-white text-sm">
                    {index + 1}
                  </span>
                  {step.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#53b7be]" />
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
            Pronto para Começar?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a realizar o sonho de ter seu próprio negócio. 
            Conte com nossa experiência de mais de 60 anos no mercado.
          </p>
          <Button 
            size="lg"
            className="bg-[#53b7be] hover:bg-[#53b7be]/90 text-white px-8"
          >
            Fale com um Especialista
          </Button>
        </div>
      </Container>
    </main>
  )
} 