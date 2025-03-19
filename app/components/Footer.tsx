import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Container } from "./ui/container"

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin
    }
  ]

  const menuItems = [
    {
      title: "Serviços",
      links: [
        { label: "Abrir Empresa", href: "/abrir-empresa" },
        { label: "Trocar de Contador", href: "/trocar-contador" },
        { label: "Consultoria", href: "/consultoria" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
        { label: "Contato", href: "/contato" }
      ]
    }
  ]

  return (
    <footer className="bg-gray-50 border-t dark:bg-slate-950 dark:border-slate-800">
      <Container>
        <div className="py-12">
          {/* Grid Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Redes Sociais */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#6a11e8] dark:text-white">
                Gaspi Contabilidade
              </h3>
              <p className="text-gray-600 text-sm dark:text-gray-300">
                Sua contabilidade em boas mãos
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 hover:text-[#6a11e8] transition-colors dark:text-gray-300 dark:hover:text-white"
                    target="_blank"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links do Menu */}
            {menuItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-gray-900 mb-4 dark:text-white">{item.title}</h3>
                <ul className="space-y-2">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-[#6a11e8] transition-colors text-sm dark:text-gray-300 dark:hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 dark:text-white">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 text-[#ef8933] shrink-0" />
                  <span>Rua Example, 123 - Centro<br />Cidade - Estado</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 text-[#ef8933]" />
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-[#ef8933]" />
                  <span>contato@gaspi.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t mt-12 pt-8 dark:border-slate-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Gaspi Contabilidade. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
} 