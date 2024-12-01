import { BrowseCard } from "@/components/cards/browse.card";
import { MotionItem } from "@/components/motion/MotionItem";
import { Course } from "@/interfaces/course";
import { AnimatePresence } from "framer-motion";

interface Props {
  courses: Course[]
}

export function CoursesList({ courses }: Props) {
  return (
    <ul
      className="flex flex-col gap-6">
      <AnimatePresence mode="popLayout">
        {
          courses.map((course) =>
            <MotionItem key={course.id} layout>
              <BrowseCard
                functionalities={course.functionalities.map(f => f.name)}
                description={course.description}
                image={course.image}
                title={course.title}
              />
            </MotionItem>
          )
        }
      </AnimatePresence>
    </ul>
  )
}
