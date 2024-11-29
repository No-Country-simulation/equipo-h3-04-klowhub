import { BrowseCard } from "@/components/cards/browse.card";
import { courseService } from "@/services/course.service";

export default async function CursosYLeccionesPage() {
  const courses = await courseService({
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool'],
    take: 2
  })

  return (
    <section>
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
  )
}
