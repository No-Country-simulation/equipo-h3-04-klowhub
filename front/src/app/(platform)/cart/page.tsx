import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function CartPage() {
  return (
    <section>
      <Breadcrumbs paths={["Home", "Cursos y lecciones", "Carrito de compras"]} />
      Carrito
    </section>
  )
}
