import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  bio: string;
  avatarSrc: string
}

export function VistaPreviaInstructor({ avatarSrc, bio, name }: Props) {
  return (
    <header className='flex gap-3'>
      <aside className='flex flex-col items-center gap-2'>
        <figure className='relative min-w-20 size-20 rounded-full overflow-hidden'>
          <Image
            className='w-full h-full object-cover'
            alt='instructor avatar'
            src={avatarSrc}
            fill
          />
        </figure>
        {/* TODO - Agregar link al perfil del instructor */}
        <Link className='underline text-xs' href={"#"}>Ver Perfil</Link>
      </aside>
      <section className='flex flex-col gap-1'>
        <p className='font-bold'>{name}</p>
        <p className='text-sm'>{bio}</p>
      </section>
    </header>
  )
}
