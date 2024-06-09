import cursoVistorias from '../assets/images/cursoVistorias.jpg'
import cursoLaudo from '../assets/images/cursoLaudo.jpg'
import cursoControleFisico from '../assets/images/cursoControleFisico.jpg'
import cursoEngenhariaManutencao from '../assets/images/cursoEngenhariaManutencao.jpg'
import { ICourses } from '@/models/payedCourses'

export const payedCourses: ICourses[] = [
  {
    name: 'Curso de Vistorias e Inspeções Prediais',
    duration: '5hr 0m',
    classes: '20',
    img: cursoVistorias,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/curso-de-vistorias-e-inspecoes-prediais',
  },
  {
    name: 'Curso de Laudo Pericial de Engenharia',
    duration: '4hr 0m',
    classes: '20',
    img: cursoLaudo,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/curso-de-laudo-pericial-de-engenharia',
  },
  {
    name: 'Curso de Controle Físico e Financeiro de Obras e Empreendimentos, com Apoio do MS Project.',
    duration: '3hr 20m',
    classes: '15',
    img: cursoControleFisico,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/curso-de-controle-fisico-e-financeiro-de-obras-e-empreendimentos-com-apoio-do-ms-project',
  },
  {
    name: 'Curso de Engenharia e Manutenção Hospitalar - Módulo de Fundamentos',
    duration: '5hr 0m',
    classes: '20',
    img: cursoEngenhariaManutencao,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/curso-de-engenharia-e-manutencao-hospitalar-modulo-de-fundamentos',
  },
]
