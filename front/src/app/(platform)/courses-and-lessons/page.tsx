import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { searchParamsCache } from "@/lib/createSearchParamsCache";
import { courseService } from "@/services/course.service";
import { SearchParams } from "nuqs";
import { CoursesList } from "./_components/CoursesList";
import { CoursesNotFound } from "./_components/CoursesNotFound";
import { PagesNavigation } from "./_components/PagesNavigation";
import { PilarFilters } from "./_components/PilarFilters";
import { SearchHeader } from "./_components/SearchHeader";

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
        course.contentPillar.some((cp) => cp === pillar)
      )
    ) {
      return false;
    }

    // Funcionalidades
    if (
      filters.functionalities.length > 0 &&
      !filters.functionalities.some((func) =>
        course.functionalities.some((cf) => cf === func)
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

    if (
      filters.languages.length > 0 &&
      !filters.languages.some((lang) => course.language.includes(lang))
    ) {
      return false;
    }

    // Sectores
    if (
      filters.sectors.length > 0 &&
      !filters.sectors.some((sector) =>
        course.sector.some((cs) => cs === sector)
      )
    ) {
      return false;
    }

    if (
      filters.contentType.length &&
      filters.contentType[0] !== (course.contentType as string)
    ) {
      return false;
    }

    // Herramientas y Plataformas
    // if (
    //   filters.toolsAndPlatforms.length > 0 &&
    //   !filters.toolsAndPlatforms.some((tool) =>
    //     course.platformsAndTool.some((pt) => pt === tool)
    //   )
    // ) {
    //   return false;
    // }

    // Agregar los filtros que faltan
    return true;
  });

  return (
    <>
      <Breadcrumbs paths={["Home", "Cursos y lecciones"]} />
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
              <PagesNavigation totalItems={courses.length} />
            </>
            : <CoursesNotFound />
        }
      </section>
    </>
  )
}
