"use client"

import CourseCard from "@/components/cards/course.card";
import TextTitleSub from "@/components/text/titlesubtitle";
import { Course } from "@/interfaces/course";
import { useEffect, useState } from "react";

export function RecommendedCourses() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACK_URL + "/course?take=3")
      .then((response) => response.json())
      .then((response) => setCourses(response.data.result))
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <section className="flex flex-col gap-4">
      <TextTitleSub
        title='Cursos Similares'
        subtitle="También te pueden interesar estas lecciones y cursos" />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {
          courses?.map((course) =>
            <CourseCard key={course.id} course={course} />)
        }
      </ul>
    </section>
  )
}
