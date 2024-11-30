import { BrowseCard } from "@/components/cards/browse.card";
import { courseService } from "@/services/course.service";
import { Header } from "./Header";
import { PilarFilters } from "./PilarFilters";
import { SearchHeader } from "./SearchHeader";

interface Props {
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function CursosYLeccionesPage(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || null;
  const pilar = searchParams?.pilar || null;

  const courses = await courseService({
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
    take: 2,
    where: {
      // TODO - Tiene que ser posible filtrar por titulos parciales, por ej si el input tiene el texto
      //        "Introdución" tengo que obtener todos los cursos que tengan esa palabra en el titulo
      title: query as string,
    }
  })

  // TODO - FILTRANDO EN EL CLIENTE POR QUE EL SERVICIO DE COURSO AUN NO LO MANEJA CORRECTAMENTE
  const filteredCourses = pilar
    ? courses.filter(c => c.contentPillars.some(p => p.name === pilar))
    : courses;

  return (
    <>
      <Header />
      <section className="flex flex-col gap-6 pt-12">
        <p className="font-bold">Encuentra el aprendizaje que estás buscando</p>
        <SearchHeader />
        <PilarFilters />
        <ul className="flex flex-col gap-6">
          {
            filteredCourses.map((course) =>
              <BrowseCard
                functionalities={course.functionalities.map(f => f.name)}
                description={course.description}
                image={course.image}
                title={course.title}
                key={course.id}
              />
            )
          }
        </ul>
      </section>
    </>
  )
}
