"use client"

import { BrowseCard } from "@/components/cards/browse.card";
import { Modal } from "@/components/modal/Modal";
import { MotionItem } from "@/components/motion/MotionItem";
import { Course } from "@/interfaces/course";
import { useCartStore } from "@/store/cart.store";
import { useDisclosure } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { CourseDetails } from "./CourseDetails";

interface Props {
  courses: Course[]
}

export function CoursesList({ courses }: Props) {
  const addCourse = useCartStore((state) => state.addCourse)
  const modalState = useDisclosure()
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course)
    modalState.onOpen()
  }

  return (
    <>
      <ul
        className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {
            courses.map((course) =>
              <MotionItem key={course.id} layout>
                <BrowseCard
                  onAddToCart={() => {
                    addCourse(course);
                    toast("Curso añadido al carrito!")
                  }}
                  functionalities={course.functionalities.map(f => f)}
                  onOpenDetails={() => handleSelectCourse(course)}
                  description={course.description}
                  image={course.coverImage || ""}
                  title={course.title}
                  id={course.id}
                />
              </MotionItem>
            )
          }
        </AnimatePresence>
      </ul>
      <Modal {...modalState} >
        <CourseDetails selectedCourse={selectedCourse} />
      </Modal>
    </>
  )
}
