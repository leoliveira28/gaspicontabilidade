import { Container } from "../components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="py-16">
      <Container>
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a11e8] mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você e sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-[#6a11e8]">
                Envie sua mensagem
              </h2>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome completo"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Digite o assunto"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Digite sua mensagem"
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#53b7be] hover:bg-[#53b7be]/90 text-white"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold text-[#6a11e8]">
                  Informações de Contato
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6a11e8]/10 rounded-full">
                    <Phone className="w-6 h-6 text-[#6a11e8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 4321-1234</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6a11e8]/10 rounded-full">
                    <Mail className="w-6 h-6 text-[#6a11e8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contato@gaspicontabilidade.com.br</p>
                    <p className="text-gray-600">comercial@gaspicontabilidade.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6a11e8]/10 rounded-full">
                    <MapPin className="w-6 h-6 text-[#6a11e8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - Bela Vista
                    </p>
                    <p className="text-gray-600">
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábados: 9h às 13h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  )
} 