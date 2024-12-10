"use client"

import TextTitleSub from "@/components/text/titlesubtitle";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Course } from "@/interfaces/course";
import { useState } from "react";
import { CourseInformation } from "../../dashboard/courses/vista-previa/_components/CourseInformation";
import { VistaPreviaAside } from "../../dashboard/courses/vista-previa/_components/VistaPreviaAside";
import { VistaPreviaMultimedia } from "../../dashboard/courses/vista-previa/_components/VistaPreviaMultimedia";
import { courseData } from "../../dashboard/courses/vista-previa/data";
import { ExpandedInformation } from "./ExpandedInformation";
import { RecommendedCourses } from "./RecommendedCourses";
import { ShortInformation } from "./ShortInformation";

interface Props {
  course: Course
}

export function CourseDetails({ course }: Props) {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <section className='flex flex-col gap-6'>
      <Breadcrumbs paths={["Home", "Mis Cursos", "Vista Previa"]} />
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
        <section className='flex flex-col gap-6 col-span-1 lg:col-span-2'>
          <TextTitleSub
            title={course.title}
            subtitle={courseData.description} />
          <CourseInformation
            duration={courseData.duration}
            rating={courseData.rating}
            reviews={courseData.reviews}
            videos={5}
          />
          <VistaPreviaMultimedia />
          {
            showMore
              ? <ExpandedInformation />
              : <ShortInformation onShowMore={() => setShowMore(true)} />
          }
        </section>
        <VistaPreviaAside
          instructor={courseData.instructor}
          courseProgram={courseData.courseProgram}
        />
      </section >
      <RecommendedCourses />
    </section>
  )

}
