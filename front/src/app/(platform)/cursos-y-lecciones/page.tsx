import { BrowseCard } from "@/components/cards/browse.card";
import { courseService } from "@/services/course.service";
import { Header } from "./Header";
import { SearchHeader } from "./SearchHeader";

interface Props {
  searchParams: {
    query?: string
  }
}

export default async function CursosYLeccionesPage(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || null;

  const courses = await courseService({
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
    take: 2,
    where: {
      title: query as string
    }
  })

  return (
    <>
      <Header />
      <section className="flex flex-col gap-6 pt-12">
        <p className="font-bold">Encuentra el aprendizaje que estás buscando</p>
        <SearchHeader />
        <ul className="flex flex-col gap-6">
          {
            courses.map((course) =>
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
