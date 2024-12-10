import Image from "next/image";
import './horizontal-scroll-bar.css';

export function VideosGallery() {
  return (
    <ul id='free-courses-list' className='flex gap-2 overflow-x-auto'>
      {
        Array(4).fill(1).map((n, index) =>
          <li key={index} className='flex flex-col '>
            <figure
              className='relative w-[190px] h-[80px] rounded-sm overflow-hidden'>
              <Image
                className='w-full h-full object-cover'
                src="/imgs/crear-curso-vista-previa.webp"
                alt='vista previa image'
                fill
              />
            </figure>
            <p className='p-2'>
              Lección {index + 1}
            </p>
          </li>
        )
      }
    </ul>
  )
}