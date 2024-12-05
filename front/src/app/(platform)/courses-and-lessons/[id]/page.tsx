// Static data, this should be replaced for data in global state
import { courseService } from '@/services/course.service'

// COMPONENTES COMPARTIDOS
import { CourseDetails } from './CourseDetails'

interface Props {
  params: {
    id: string
  }
}

export default async function CoursePage(props: Props) {
  const { id } = await props.params

  const result = await courseService({
    take: 1,
    where: {
      id
    }
  })

  const course = result[0]

  return (
    <CourseDetails course={course} />
  )
}

