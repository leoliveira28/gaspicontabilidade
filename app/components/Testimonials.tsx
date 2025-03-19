import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Container } from "./ui/container"

export function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      role: "Proprietário - Empresa de Software",
      image: "/avatars/joao.jpg",
      testimonial: "Desde que mudamos para a Gaspi Contabilidade, nossa gestão financeira melhorou significativamente. O atendimento é excepcional!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "CEO - Agência de Marketing",
      image: "/avatars/maria.jpg",
      testimonial: "A equipe é muito profissional e sempre disponível. Eles realmente entendem as necessidades do meu negócio.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor - Comércio Varejista",
      image: "/avatars/pedro.jpg",
      testimonial: "O suporte tributário que recebemos é fundamental para o crescimento do nosso negócio. Recomendo fortemente!",
      rating: 5
    }
  ]

  const Rating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6a11e8] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos serviços têm ajudado empresas a crescerem e se desenvolverem com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6a11e8]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <Rating rating={testimonial.rating} />
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 italic">
                  {testimonial.testimonial}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
} 