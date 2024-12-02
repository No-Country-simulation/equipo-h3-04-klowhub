"use client"

import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react"
import Link from "next/link"

export function CoursesHeader() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Mis Cursos</BreadcrumbItem>
      </Breadcrumbs>
      <header className="flex justify-between items-center">
        <p>Ultimas ventas</p>
        <Link href="/dashboard/create-course/informacion-general">
          <Button className="bg-primario-400 text-white px-20">Crear curso</Button>
        </Link>
      </header>
    </>
  )
}
