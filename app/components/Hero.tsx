import { Button } from "./ui/button"
import { Container } from "./ui/container"

export function Hero() {
  return (
    <div className="relative min-h-[70vh] flex items-center">
      {/* Background com gradiente */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#53b7be]/10 to-[#ef8933]/10 -z-10"
        aria-hidden="true"
      />
      
      <Container>
        <div className="text-center space-y-8">
          {/* Título Principal */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6a11e8]"
          >
            A contabilidade que oferece mais pelo melhor preço
          </h1>

          {/* Subtítulo */}
          <p 
            className="text-xl md:text-2xl text-[#53b7be] max-w-3xl mx-auto"
          >
            Seu parceiro estratégico para o sucesso financeiro da sua empresa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white"
            >
              Quero abrir uma empresa
            </Button>
            <Button 
              size="lg"
              className="bg-[#53b7be] hover:bg-[#53b7be]/90 text-white"
            >
              Trocar de contabilidade
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 