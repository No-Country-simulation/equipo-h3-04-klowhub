import { courseService } from "@/services/course.service";
import { PromocionesForm } from "./PromocionesForm";

export default async function PromocionesPage() {
  const courses = await courseService({
    take: 2,
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
  })

  return (
    <section className='flex flex-col gap-12 pt-6'>
      <section className='flex flex-col gap-6'>
        <p className='font-bold'>Fusiona tus cursos y apps, expande tus posibilidades</p>
        <p>En AppSheetHub, te damos la libertad de combinar tus aplicaciones y cursos para crear soluciones únicas y personalizadas. No te limites a una sola herramienta: potencia tu creatividad uniendo conocimientos y funcionalidades para lograr un impacto mayor. Diseña, comparte y aprende como nunca antes. ¡El límite lo pones vos!</p>
      </section>
      <PromocionesForm courses={courses} />
    </section>
  )
}


