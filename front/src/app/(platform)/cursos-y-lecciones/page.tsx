import { searchParamsCache } from "@/lib/createSearchParamsCache";
import { courseService } from "@/services/course.service";
import { SearchParams } from "nuqs";
import { CoursesList } from "./CoursesList";
import { CoursesNotFound } from "./CoursesNotFound";
import { Header } from "./Header";
import { PagesNavigation } from "./PagesNavigation";
import { PilarFilters } from "./PilarFilters";
import { SearchHeader } from "./SearchHeader";

interface Props {
  searchParams: Promise<SearchParams & { query?: string, pilar?: string }>;
}

export default async function CursosYLeccionesPage({ searchParams }: Props) {
  const params = await searchParams
  const filters = searchParamsCache.parse(params);

  const query = params.query || null
  const pilar = params.pilar || null

  const courses = await courseService({
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
    take: 4,
    offset: (filters.page - 1) * 4,
    where: {
      // TODO - Tiene que ser posible filtrar por titulos parciales, por ej si el input tiene el texto
      //        "Introdución" tengo que obtener todos los cursos que tengan esa palabra en el titulo
      title: query as string,
    }
  })

  // // TODO - FILTRANDO EN EL CLIENTE POR QUE EL SERVICIO DE CURSO AUN NO LO MANEJA CORRECTAMENTE
  const filteredCourses = courses.filter((course) => {
    // Contenido pilar
    if (
      filters.contentPillar.length > 0 &&
      !filters.contentPillar.some((pillar) =>
        course.contentPillars.some((cp) => cp.name === pillar)
      )
    ) {
      return false;
    }

    // Funcionalidades
    if (
      filters.functionalities.length > 0 &&
      !filters.functionalities.some((func) =>
        course.functionalities.some((cf) => cf.name === func)
      )
    ) {
      return false;
    }

    // Lenguaje
    if (
      filters.languages.length > 0 &&
      !filters.languages.some((lang) => course.language.includes(lang))
    ) {
      return false;
    }

    // Plataformas
    if (
      filters.platforms.length > 0 &&
      !filters.platforms.some((platform) =>
        course.platforms.some((cp) => cp.name === platform)
      )
    ) {
      return false;
    }

    // Agregar los filtros que faltan
    return true;
  });

  return (
    <>
      <Header />
      <section className="flex flex-col gap-6 pt-12">
        <p className="font-bold">Encuentra el aprendizaje que estás buscando</p>
        <SearchHeader />
        <PilarFilters />
        {
          filteredCourses.length
            ?
            <>
              <CoursesList courses={filteredCourses} />
              {/* TODO - Obtener el total de items usando el servicio de cursos */}
              <PagesNavigation totalItems={100} />
            </>
            : <CoursesNotFound />
        }
      </section>
    </>
  )
}
