import { CheckIcon } from "lucide-react";

interface Props {
  title: string;
  items: string[]
}

export function TickList({ items, title }: Props) {
  return (
    <section className='flex flex-col gap-6 pb-4'>
      <p className='text-xl font-bold'>{title}</p>
      <ul className='flex flex-col gap-4'>
        {
          items.map((item) =>
            <li className='flex items-center gap-2' key={item}>
              <span className='px-4'>
                <CheckIcon className="stroke-primario-200" />
              </span>
              <p>{item}</p>
            </li>
          )
        }
      </ul>
    </section>
  )
}
