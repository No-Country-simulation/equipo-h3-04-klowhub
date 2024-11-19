'use client'

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Chip } from "@nextui-org/chip"
import { Image } from "@nextui-org/image"
import { StarIcon, Heart } from 'lucide-react';
import { useState } from "react"

export default function CourseCard() {
  const [isLiked, setIsLiked] = useState(false); // Estado para el corazón


  return (
    <Card className="max-w-md bg-background ">
      <CardHeader className="relative p-0">
        <Image
          alt="Course banner showing connected gears"
          className="object-cover rounded-sm w-full aspect-video -z-1"
          src="https://s3-alpha-sig.figma.com/img/506c/cc48/851ee65298dd8406740d3074280195ef?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOa5FQu0fCAoRU1nKuBlxnQPkf4b~AL3xA7zrCY9RYi3cY-nwH0dOinrOE98CPm561r~5fnpDsdKqnyWFBl7CPC5jLd5Db3ZgvB0KHsMVybk5VqHgkJhbjth0nWtRRS0j5nAc6WSVSxVOCgt5B38Kq3SXNGLqt90VR~oG~4d8DeCwFIzp4sv1ftj40OcdWkaVKLsjBGz5oKmIv~PBKllh7Zhnw8EZMGeBJh-REhXNzT6nt~rwGKhet9wXPtcRvgNbjmOKb81LWvtdD~yMtsv8J7q4zio6BQaeizzU65pLQPyMAN~pKVDJbWE98Mi7qpVoxX0ttksorVuDjSWXTs2Ng__"
        />
        <Chip
          className="absolute top-2 left-2 z-15 bg-green-200 text-green-600"

          variant="solid"
          size="sm"
        >
          Lección
        </Chip>
        <Button
          className={`absolute top-2 right-2 z-10 ${isLiked ? "bg-red-800" : ""} `}
          variant="light"
          isIconOnly
          aria-label="Like"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart color={`${isLiked ? "red" : "white"}`} className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardBody className="p-3 text-small gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">Gestión de inventarios con AppSheet</h3>
          <p className="text-default-500">
            Aprende a crear aplicaciones para controlar inventarios.
            Descubre cómo desarrollar aplicaciones personalizadas
          </p>
        </div>
        <div className="flex gap-2">
          <Image
            alt="AppSheet logo"
            className="w-6 h-6 rounded"
            src="/placeholder.svg?height=24&width=24"
          />
          <span className="font-semibold">AppSheet</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Chip size="sm" variant="flat" className="text-text-button bg-back-button">Logística</Chip>
          <Chip size="sm" variant="flat" className="text-text-button bg-back-button">Optimización</Chip>
          <Chip size="sm" variant="flat" className="text-text-button bg-back-button">Inventarios</Chip>
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
          <span className="text-xl font-bold">$80.000</span>
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