import Image from 'next/image'
import ImagePresentation from '../../../assets/images/ImagePresentation.jpg'

export const Presentation = () => {
  return (
    <div className="bg-[#f1f1f1] text-black-primary flex justify-between gap-3 mt-20">
      <Image
        className="w-full"
        height="120"
        width={1500}
        alt="Imagem de apresentação"
        src={ImagePresentation}
      />
    </div>
  )
}
