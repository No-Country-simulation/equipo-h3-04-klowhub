import { Chip } from "@nextui-org/react";

interface Props {
  title: string;
  items: string[]
}

export function FunctionalitiesLists({ items, title }: Props) {
  return (
    <section className='flex flex-col gap-2 items-center'>
      <p>{title}</p>
      <ul className='flex flex-col gap-2 items-center'>
        {
          items.map(item =>
            <Chip className='bg-primario-100 text-primario-400'>
              {item}
            </Chip>
          )
        }
      </ul>
    </section>
  )
}