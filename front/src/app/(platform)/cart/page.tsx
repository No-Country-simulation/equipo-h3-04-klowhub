import { CartCard } from "@/components/cards/cart.card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SupportMessage } from "@/components/ui/support-message";
import { RecommendedCourses } from "../courses-and-lessons/[id]/RecommendedCourses";

export default function CartPage() {
  return (
    <section className="flex flex-col gap-12">
      <header className="flex flex-col gap-6">
        <Breadcrumbs paths={["Home", "Cursos y lecciones", "Carrito de compras"]} />
        <p>
          Carrito De Compras
        </p>
      </header>
      <section className="grid grid-cols-[repeat(auto-fit,minmax())]">
        <ul className="flex flex-col gap-6">
          {
            Array(3).fill(1).map((n, index) =>
              <CartCard key={index} />
            )
          }
        </ul>
      </section>
      <SupportMessage />
      <RecommendedCourses />
    </section>
  )
}
