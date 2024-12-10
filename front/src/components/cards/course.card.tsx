'use client'

import { HeartIcon } from "@/components/icons/hearticon"
import { Course } from "@/interfaces/course"
import { useCartStore } from "@/store/cart.store"
import { Card, CardBody, CardFooter, CardHeader, Chip, Image, Button as NextUiButton } from "@nextui-org/react"
import { StarIcon } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from '../ui/Button'

export default function CourseCard({ course }: { course: Course }) {
  const [isLiked, setIsLiked] = useState(false); // Estado para el corazón

  const addCourse = useCartStore((state) => state.addCourse)
  const courses = useCartStore((state) => state.courses)

  const courseIsAlreadyInCart = courses.some((c) => c.id === course.id)

  return (
    <Card fullWidth className="bg-card" shadow="lg"  >
      <CardHeader className="relative p-0">

        <Image
          alt="Course banner showing connected gears"
          className="object-cover rounded-sm w-full aspect-video -z-1"
          src={"/imgs/DALL·E 2024-09-04 01.43.39.webp"}
        />
        <Chip
          className="absolute top-2 left-2 z-15 bg-green-200 text-green-600"

          variant="solid"
          size="sm"
        >
          {course.contentType}
        </Chip>
        <NextUiButton
          isIconOnly
          className="absolute top-2 right-2 z-10"
          radius="full"
          variant="light"
          onPress={() => setIsLiked((v) => !v)}
        >
          <HeartIcon
            className={isLiked ? "[&>path]:stroke-transparent" : "[&>path]:stroke-white"}
            fill={isLiked ? "red" : "none"} width={undefined} height={undefined} />
        </NextUiButton>
      </CardHeader>
      <CardBody className="p-3 text-small gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">{course.title}</h3>
          <p className="text-default-300">{course.description}</p>
        </div>
        <div className="flex gap-2">
          {/* <div>
            {course.platforms}
          </div> */}

        </div>
        <div className="flex gap-2 flex-wrap">
          {
            course.sector?.map((sector) => <Chip color="secondary" key={sector} size="sm" variant="flat" className="text-white">{sector}</Chip>)
          }
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${i < 3 ? "text-warning" : "text-default-300"
                  }`}
                fill={i < 3 ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-default-500">(136)</span>
        </div>
      </CardBody>
      <CardFooter className="flex flex-col px-3 justify-between gap-2 items-start">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{course.price}</span>
        </div>
        <footer className="flex gap-2 mt-3 items-center flex-wrap w-full">
          <Button
            className="w-auto"
            onClick={() => {
              addCourse(course)
              toast("Curso añadido al carrito!")
            }}
            disabled={courseIsAlreadyInCart}
          >
            Añadir al carrito
          </Button>
          <Link className="text-primario-200 flex-1 p-2 text-center hover:underline" href={`/courses-and-lessons/${course.id}`}>
            Ver detalles
          </Link>
        </footer>
      </CardFooter>
    </Card>
  )
}