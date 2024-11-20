import CourseCard from "@/components/cards/course.card"
import { courseService } from "@/services/course.service"

export default async function Curso() {
  const courses = await courseService({
    take: 5,
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
  })

  if (courses.length === 0) return <p>No se encontraron cursos</p>
  return (
    <div className="container mx-auto pt-10">
      <h2 className="text-2xl font-semibold text-center">Cursos disponible</h2>
      <div className="grid grid-cols-5 gap-3 pt-6">
        {courses.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  )
}