'use client'

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"
import { Image } from "@nextui-org/image"
import { StarIcon, TvMinimalPlay } from 'lucide-react';
import { useState } from "react"
import { Course } from "@/interfaces/course"
import { HeartIcon } from "@/components/icons/hearticon"
import { uniqueFileName } from '../../../../back/src/common/utils/unique-filename';

export default function CourseCard({ course }: { course: Course }) {
  const [isLiked, setIsLiked] = useState(false); // Estado para el corazón

  return (
    <Card fullWidth className=" bg-#1f2937 " shadow="lg"  >
      <CardHeader className="relative p-0">

        <Image
          alt="Course banner showing connected gears"
          className="object-cover rounded-sm w-full aspect-video -z-1"
          src="/imgs/DALL·E 2024-09-04 14.27.44.webp"
        />
        <Chip
          className="absolute top-2 left-2 z-15 bg-green-200 text-green-600"

          variant="solid"
          size="sm"
        >
          {course.type}
        </Chip>
        <Button
          isIconOnly
          className="absolute top-2 right-2 z-10"
          radius="full"
          variant="light"
          onPress={() => setIsLiked((v) => !v)}
        >
          <HeartIcon
            className={isLiked ? "[&>path]:stroke-transparent" : "[&>path]:stroke-white"}
            fill={isLiked ? "red" : "none"} width={undefined} height={undefined} />
        </Button>
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
            course.sectors.map((sector) => <Chip color="secondary" key={sector.id} size="sm" variant="flat" className="text-white">{sector.name}</Chip>)
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
        <div className="flex gap-2 mt-3">

          <Button
            className="bg-primario-500 py-3 text-foreground"
            size="md"
            radius="sm"

          >
            Añadir al carrito
          </Button>
          <Button
            className="bg-transparent py-3 text-primario-200"
            size="md"
            radius="sm"
          >
            Ver detalles
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}