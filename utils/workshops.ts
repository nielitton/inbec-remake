import workShopOne from '../assets/images/workshopOne.jpg'
import workshopTwo from '../assets/images/workshopTwo.jpg'
import workshopThree from '../assets/images/workshopThree.jpg'
import workshopFour from '../assets/images/workshopFour.jpg'

import { ICourses } from '@/models/payedCourses'

export const workshops: ICourses[] = [
  {
    name: 'Workshop Online de Avaliação de Imóveis Urbanos',
    duration: '4hr 32m',
    classes: '3',
    img: workShopOne,
    courseLink:
      'https://cursosead.inbec.com.br/workshops/workshop-online-de-avaliacao-de-imoveis-urbanos',
  },
  {
    name: 'Workshop Online sobre Edificações Sustentáveis e Saudáveis',
    duration: '4hr 25m',
    classes: '3',
    img: workshopTwo,
    courseLink:
      'https://cursosead.inbec.com.br/workshops/workshop-online-sobre-edificacoes-sustentaveis-e-saudaveis',
  },
  {
    name: 'Workshop Online sobre Engenharia e Manutenção Hospitalar',
    duration: '4hr 28m',
    classes: '3',
    img: workshopThree,
    courseLink:
      'https://cursosead.inbec.com.br/workshops/workshop-online-sobre-engenharia-e-manutencao-hospitalar',
  },
  {
    name: 'Workshop Online sobre Orçamento e Licitações de Obras de Engenharia',
    duration: '4hr 52m',
    classes: '2',
    img: workshopFour,
    courseLink:
      'https://cursosead.inbec.com.br/workshops/workshop-online-sobre-orcamento-e-licitacoes-de-obras-de-engenharia',
  },
]
