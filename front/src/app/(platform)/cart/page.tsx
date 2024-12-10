import { CheckoutCard } from "@/components/checkout/checkout-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SupportMessage } from "@/components/ui/support-message";
import { RecommendedCourses } from "../courses-and-lessons/[id]/RecommendedCourses";
import { CartCoursesList } from "./cart-courses-list";

export default function CartPage() {
  return (
    <section className="flex flex-col gap-12">
      <header className="flex flex-col gap-6">
        <Breadcrumbs paths={["Home", "Cursos y lecciones", "Carrito de compras"]} />
        <p>
          Carrito De Compras
        </p>
      </header>
      <section className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <CartCoursesList />
        <CheckoutCard />
      </section>
      <SupportMessage />
      <RecommendedCourses />
    </section>
  )
}