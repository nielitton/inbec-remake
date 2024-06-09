import introducaoLaudoPericial from '../assets/images/introducaoLaudoPericial.jpg'
import engenhariaManutencaoHospitalar from '../assets/images/engenhariaManutencaoHospitalar.jpg'
import construcaoSustentavel from '../assets/images/construcaoSustentavel.jpg'
import tecnologiasMateriaisParaConstru from '../assets/images/tecnologiasMateriaisParaConstru.jpg'

import { ICourses } from '@/models/payedCourses'

export const freeCourses: ICourses[] = [
  {
    name: 'Introdução - Laudo Pericial em Engenharia',
    duration: '0hr 8m',
    classes: '1',
    img: introducaoLaudoPericial,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/introducao-laudo-pericial-em-engenharia',
  },
  {
    name: 'Introdução - Engenharia e Manutenção Hospitalar',
    duration: '0hr 50m',
    classes: '1',
    img: engenhariaManutencaoHospitalar,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/introducao-engenharia-e-manutencao-hospitalar',
  },
  {
    name: 'Introdução - Construção Sustentável e as Certificações Leed, Aqua e Casa Azul',
    duration: '0hr 31m',
    classes: '1',
    img: construcaoSustentavel,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/introducao-construcao-sustentavel-e-as-certificacoes-leed-aqua-e-casa-azul',
  },
  {
    name: 'Introdução - Tecnologias e Materiais para Construções Sustentáveis',
    duration: '0hr 31m',
    classes: '1',
    img: tecnologiasMateriaisParaConstru,
    courseLink:
      'https://cursosead.inbec.com.br/cursos/introducao-tecnologias-e-materiais-para-construcoes-sustentaveis',
  },
]
