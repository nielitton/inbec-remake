import { IconBooble } from '@/components/molecules/icon-booble/iconBooble'
import { BookText, GraduationCap, Settings } from 'lucide-react'
import Link from 'next/link'

export const MoreAbout = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap md:flex-nowrap gap-5 mt-6">
        <div className="flex justify-center items-center flex-col gap-3">
          <IconBooble>
            <Settings className="w-full h-full" color="white" />
          </IconBooble>
          <p className="text-center">
            Acesse nossos workshops online para aprender novidades,
            curiosidades, técnicas e conceitos de engenharia, arquitetura e
            muito mais!
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <IconBooble>
            <BookText className="w-full" color="white" />
          </IconBooble>
          <p className="text-center">
            Se o seu objetivo é aprofundar seus conhecimentos em alguma área,
            também contamos com uma série de cursos online 100% gratuitos!
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3">
          <IconBooble>
            <GraduationCap className="w-full" color="white" />
          </IconBooble>
          <p className="text-center">
            Aqui você vai encontrar também, cursos rápidos de altíssimo valor,
            com conteúdos relevantes para alavancar sua carreira.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center border-t gap-3 pt-4 border-blue-dark mb-10">
        <p className="text-center w-[70%]">
          Cadastre-se agora para ter acesso ao nosso catalogo completo de
          conteúdo gratuito. E fique de olho, mais workshops e cursos estão a
          caminho!
        </p>
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
