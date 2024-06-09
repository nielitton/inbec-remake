import { ICourses } from '@/models/payedCourses'
import { ArrowRight, Clock, GraduationCap, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ListCoursesProps {
  data: ICourses[]
  title: string
  urlSeeAll: string
  quantity?: number
}

export const ListCourses = ({
  data,
  title,
  urlSeeAll,
  quantity = 2,
}: ListCoursesProps) => {
  const filteredData = data.slice(0, quantity)

  return (
    <div className="w-full">
      <h2 className="flex items-center gap-2 font-bold text-2xl mb-4">
        <GraduationCap className="text-[20px]" /> {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredData.map((item, index) => (
          <Link
            href={item.courseLink || '#'}
            key={index}
            className={`flex ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} mb-4 shadow-xl cursor-pointer`}
          >
            <div className="bg-white border flex overflow-hidden w-full">
              <div className="w-1/2">
                <Image
                  src={item.img}
                  height={200}
                  width={200}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <span className="text-xl font-semibold mb-2 text-gray-800">
                  {item.name}
                </span>
                <div className="flex justify-between w-full">
                  <span className="flex items-center text-gray-500">
                    <Video className="mr-2" width={20} height={20} />{' '}
                    {item.classes}
                  </span>
                  <span className="flex items-center text-gray-500">
                    <Clock className="mr-2" width={20} height={20} />{' '}
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          target="_blank"
          className="flex items-center gap-1 rounded-md px-4 py-2 bg-blue-dark text-white cursor-pointer hover:bg-blue-dark/90 w-36"
          href={urlSeeAll}
        >
          Ver todos <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
