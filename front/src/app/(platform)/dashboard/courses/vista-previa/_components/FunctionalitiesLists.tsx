import { ChipsList } from "@/components/ui/ChipsList";

interface Props {
  title: string;
  items: string[]
}

export function FunctionalitiesLists({ items, title }: Props) {
  return (
    <section className='flex flex-col gap-2 items-center'>
      <p>{title}</p>
      <ChipsList items={items} />
    </section>
  )
}

