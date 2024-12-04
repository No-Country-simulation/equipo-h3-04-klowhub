import { FunctionalitiesLists } from "./FunctionalitiesLists";

interface Props {
  functionalities: string[],
  tools: string[],
  sector: string[],
  others: string[]
}

export function VistaPreviaFunctionalities({ functionalities, others, sector, tools }: Props) {
  return (
    <section className='flex flex-col gap-6'>
      <p className='text-xl font-bold'>Informacion y funcionalidades de la app</p>
      <section className='flex gap-4 justify-between flex-wrap p-4 rounded-xl border border-primario-200'>
        <FunctionalitiesLists
          items={functionalities}
          title='Funcionalidades' />
        <FunctionalitiesLists
          items={tools}
          title='Herramientas y plataformas' />
        <FunctionalitiesLists
          items={sector}
          title='Sector' />
        <FunctionalitiesLists
          items={others}
          title='Pilar de contenido' />
      </section>
    </section>
  )
}
