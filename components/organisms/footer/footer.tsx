import { ArrowUp, GlobeLock } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#f1f1f1] w-full h-50 text-black-primary py-5 gap-4">
      <p>
        Copyright © 2024 INBEC -{' '}
        <Link
          className="text-blue-600 text-center"
          target="_blank"
          href="https://www.inbec.com.br/"
        >
          Instituto Brasileiro de Educação Continuada.
        </Link>{' '}
        Todos os direitos reservados.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Link
          href="https://inbec.com.br/institucional/politica-de-privacidade"
          target="_blank"
          className="flex items-center justify-center gap-1 text-blue-600"
        >
          <GlobeLock className="w-4 h-4" /> Política de privacidade
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center gap-1 text-blue-600"
        >
          <ArrowUp className="w-4 h-4" /> Topo
        </Link>
        <Link
          href="https://cursosead.inbec.com.br/register"
          target="_blank"
          className="rounded-md px-4 py-2 bg-blue-dark text-white cursor-pointer hover:bg-blue-dark/90"
        >
          Realizar meu cadastro
        </Link>
      </div>
    </div>
  )
}
