"use client"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export function CreateCourseHeader() {
  return (
    <header className="flex flex-col gap-6">
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Crear Curso</BreadcrumbItem>
      </Breadcrumbs>
      <p className="font-bold">Lanza tu curso: Comparte tu conocimiento</p>
    </header>
  )
}
