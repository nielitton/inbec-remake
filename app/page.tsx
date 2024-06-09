import { ListCourses } from '@/components/organisms/listCourses/listCourses'
import { MoreAbout } from '@/components/organisms/more-about/moreAbout'
import { Presentation } from '@/components/organisms/presentation/presentation'
import { payedCourses } from '@/utils/courses'
import { freeCourses } from '@/utils/freeCourses'
import { workshops } from '@/utils/workshops'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Presentation />
      <div className="w-[70%]">
        <MoreAbout />
      </div>
      <div className="mx-[30px] mb-5">
        <ListCourses
          data={freeCourses}
          title="Acesse nossos Cursos Gratuitos"
          quantity={4}
          urlSeeAll="https://cursosead.inbec.com.br/cursos"
        />
      </div>
      <div className="mx-[30px] mb-5">
        <ListCourses
          data={payedCourses}
          title="Acesse nossos Cursos Pagos"
          quantity={4}
          urlSeeAll="https://cursosead.inbec.com.br/cursos/pagos"
        />
      </div>
      <div className="mx-[30px] mb-5">
        <ListCourses
          data={workshops}
          title="Conheça alguns dos nossos Workshops"
          quantity={4}
          urlSeeAll="https://cursosead.inbec.com.br/workshops"
        />
      </div>
    </main>
  )
}
