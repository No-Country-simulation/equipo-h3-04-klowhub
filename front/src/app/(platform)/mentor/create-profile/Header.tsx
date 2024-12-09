import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export function Header() {
  return (
    <section>
      <Breadcrumbs paths={["Home", "Perfil de Mentor"]} />
      <p>Conviértete en mentor: Comparte tu experiencia</p>
    </section>
  )
}
