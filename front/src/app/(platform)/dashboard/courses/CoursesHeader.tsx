"use client"

import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react"
import { Link } from "lucide-react"

export function CoursesHeader() {
  return (
    <>
      <Breadcrumbs
        itemClasses={{
          item: "text-white/60 data-[current=true]:text-white",
          separator: "text-white/40",
        }}>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Mis Cursos</BreadcrumbItem>
      </Breadcrumbs>
      <header className="flex justify-between items-center">
        <p>Ultimas ventas</p>
        <Link href="/dashboard/create-course">
          <Button className="bg-primario-400 text-white px-20">Crear curso</Button>
        </Link>
      </header>
    </>
  )
}
