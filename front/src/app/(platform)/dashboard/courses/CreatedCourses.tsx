import CourseCard from "@/components/cards/course.card";
import { courseService } from "@/services/course.service";

export async function CreatedCourses() {
  const courses = await courseService({
    take: 2,
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
  })

  return (
    <section className="flex flex-col gap-6">
      <header>
        <p>Cursos Creados</p>
      </header>
      <ul className="grid grid-cols-3 gap-6">
        {courses.map((course) =>
          <CourseCard course={course} />)
        }
      </ul>
    </section>
  )
}
