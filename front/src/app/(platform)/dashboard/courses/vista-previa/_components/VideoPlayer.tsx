import { Settings2Icon, SettingsIcon, VolumeIcon } from "lucide-react";
import Image from "next/image";

export function VideoPlayer() {
  return (
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
  )
}
