'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Container } from "./ui/container"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      label: "Início",
      href: "/"
    },
    {
      label: "Serviços",
      items: [
        { label: "Abrir Empresa", href: "/abrir-empresa" },
        { label: "Trocar de Contador", href: "/trocar-contador" },
        { label: "Consultoria", href: "/consultoria" }
      ]
    },
    {
      label: "Blog",
      href: "/blog"
    },
    {
      label: "Sobre Nós",
      href: "/sobre"
    },
    {
      label: "Trabalhe Conosco",
      href: "/trabalhe-conosco"
    },
    {
      label: "Contato",
      href: "/contato"
    }
  ]

  return (
    <header className="border-b sticky top-0 bg-white dark:bg-slate-950 dark:border-slate-800 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#6a11e8] dark:text-white">
            Gaspi Contabilidade
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.items ? (
                  <>
                    <button className="text-gray-600 hover:text-[#6a11e8] transition-colors dark:text-gray-300 dark:hover:text-white">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-lg shadow-lg py-2 w-48">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-[#6a11e8] hover:bg-gray-50 transition-colors dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-800"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#6a11e8] transition-colors dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white">
                Área do Cliente
              </Button>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] dark:bg-slate-950 dark:border-slate-800">
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.items ? (
                        <div className="space-y-2">
                          <p className="text-gray-900 font-medium dark:text-gray-100">{item.label}</p>
                          <div className="ml-4 space-y-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block text-gray-600 hover:text-[#6a11e8] transition-colors dark:text-gray-300 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-[#6a11e8] transition-colors dark:text-gray-300 dark:hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="bg-[#ef8933] hover:bg-[#ef8933]/90 text-white w-full mt-4">
                    Área do Cliente
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  )
} 