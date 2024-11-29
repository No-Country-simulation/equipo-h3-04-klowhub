import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export function Header() {
  return (
    <section>
      <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Perfil de Mentor</BreadcrumbItem>
      </Breadcrumbs>
      <p>Conviértete en mentor: Comparte tu experiencia</p>
    </section>
  )
}
