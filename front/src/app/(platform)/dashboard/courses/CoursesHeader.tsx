"use client"

import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function CoursesHeader() {
  return (
    <>
      <Breadcrumbs paths={["Dashboard", "Mis Cursos"]} />
      <header className="flex justify-between items-center">
        <p>Ultimas ventas</p>
        <Link href="/dashboard/create-course/informacion-general">
          <Button className="bg-primario-400 text-white px-20">Crear curso</Button>
        </Link>
      </header>
    </>
  )
}
