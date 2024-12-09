"use client"

import { CartCard } from "@/components/cards/cart.card"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { useCartStore } from "@/store/cart.store"
import Link from "next/link"

export function CartCoursesList() {
  const courses = useCartStore(state => state.courses)

  if (!courses.length) {
    return (
      <Section className="bg-card flex-1 flex items-center justify-center flex-col gap-6">
        <p>
          No hay productos en tu carrito
        </p>
        <Link href={"/courses-and-lessons"}>
          <Button size={"big"} variant={"outlined"}>Ver cursos</Button>
        </Link>
      </Section>
    )
  }

  return (
    <ul className="flex flex-col gap-6 flex-1">
      {
        courses.map((course, index) =>
          <CartCard
            plataforma={course.platforms[0]}
            sector={course.sectors[0].name}
            title={course.title}
            img={course.image}
            reviews={14}
            rating={12}
            key={index} />
        )
      }
    </ul>
  )
}
