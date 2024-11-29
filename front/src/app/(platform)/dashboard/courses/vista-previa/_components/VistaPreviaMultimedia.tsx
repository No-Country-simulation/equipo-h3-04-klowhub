import { Settings2Icon, SettingsIcon, VolumeIcon } from "lucide-react";
import Image from "next/image";

export function VistaPreviaMultimedia() {
  return (
    <section>
      <figure className='relative h-[350px] w-full overflow-hidden rounded-lg'>
        <div className='z-10 absolute bottom-0 bg-black/30 backdrop-blur-sm w-full flex justify-between px-8 py-2 items-center gap-9'>
          <section>
            <p className='text-sm'>
              1:35
            </p>
          </section>
          <section className='relative flex-1'>
            <div className='absolute size-3 rounded-full bg-white -top-1' />
            <div className='absolute h-1 rounded-full bg-white' style={{ width: "30%" }} />
            <div className='h-1 rounded-full bg-white/30' />
          </section>
          <section className='flex gap-2 items-center'>
            <VolumeIcon />
            <SettingsIcon />
            <Settings2Icon />
          </section>
        </div>
        <Image
          className='w-full h-full object-cover'
          src="/imgs/crear-curso-vista-previa.webp"
          alt='vista previa image'
          fill
        />
      </figure>
      <footer className='w-full flex flex-col'>
        <p className='p-2'>Contenido Gratuito</p>
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
      </footer>
    </section>
  )
}
