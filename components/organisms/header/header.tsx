'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <nav className="fixed top-0 flex justify-center items-center bg-blue-dark text-white w-full h-20">
      <div className="flex justify-center md:justify-between md:mx-20 w-full gap-2">
        <Image
          width={130}
          height={130}
          src="https://cursosead.inbec.com.br/img/logo-site.svg"
          alt="Logo inbec"
        />
        <div className="flex justify-between items-center gap-2">
          <Link href="https://cursosead.inbec.com.br/login" target="_blank">
            Login
          </Link>
          <Link
            href="https://cursosead.inbec.com.br/register"
            target="_blank"
            className="rounded-md px-4 py-2 bg-white text-blue-dark cursor-pointer hover:bg-white/90"
          >
            Cadastrar
          </Link>
          <DropdownMenu open={openedMenu} onOpenChange={setOpenedMenu}>
            <DropdownMenuTrigger onClick={() => setOpenedMenu(openedMenu)}>
              {!openedMenu ? (
                <Menu
                  className="transition-all duration-500"
                  width={35}
                  height={35}
                />
              ) : (
                <X
                  className="transition-all duration-500"
                  width={35}
                  height={35}
                />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="#">Página Inicial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://cursosead.inbec.com.br/workshops"
                  target="_blank"
                >
                  Workshops
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://cursosead.inbec.com.br/cursos"
                  target="_blank"
                >
                  Cursos Gratuitos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://cursosead.inbec.com.br/cursos/pagos"
                  target="_blank"
                >
                  Cursos Pagos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://cursosead.inbec.com.br/cursos/promocionais"
                  target="_blank"
                >
                  Cursos Promocionais
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://www.inbec.com.br/institucional/sobre-o-inbec"
                  target="_blank"
                >
                  Sobre o INBEC
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
