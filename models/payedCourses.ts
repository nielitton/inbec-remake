import { StaticImageData } from 'next/image'

export interface ICourses {
  name: string
  duration: string
  classes: string
  img: StaticImageData
  courseLink: string
}
