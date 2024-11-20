import { courseService } from "@/services/course.service"
import CourseCard from "@/components/coursecard/course-card.tsx"

export default async function Courses() {
  const courses = await courseService({
    take: 5,
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
  })


  return (
    <div className="grid grid-cols-5 gap-3">
      {courses?.map((course) => <CourseCard course={course} />)}
    </div>
  )
}