"use client"

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Course } from "@/interfaces/course";
import { useCartStore } from "@/store/cart.store";
import { User } from "@nextui-org/react";
import { GraduationCapIcon, MessageSquareIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { CoursePreview } from "../page";
import { ModulosAccordion } from "./ModulosAccordion";

interface Props {
  instructor: CoursePreview["instructor"]
  courseProgram: CoursePreview["courseProgram"]
}

export function VistaPreviaAside({ instructor, courseProgram }: Props) {
  const addCourse = useCartStore((state) => state.addCourse)
  const courses = useCartStore((state) => state.courses)
  const { id } = useParams()

  const courseAlreadyInCart = courses.some((course) => course.id === id)

  const fetchAndAddCourse = async (id: Course['id']) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/course/one?where={"id":"${id}"}`);
      const json = await response.json();
      const course = await json.data

      // Add the course to the store
      addCourse(course);
      toast("Curso agregado al carrito!")
    } catch (error) {
      console.error('Failed to fetch course:', error);
    }
  }

  return (
    <aside className="flex flex-col gap-6">
      <Section className="bg-card">
        <div className="relative border-b border-primario-200 pb-4">
          <User
            avatarProps={{ src: "/avatar.png" }}
            description="Desarrollado backend"
            name="prueba" />
          <span className="absolute bg-gradient-to-r from-[#492181] to-[#58759D] text-xs px-2 py-1 mx-1 rounded-sm">PRO</span>
        </div>
        <ul className="flex flex-col p-4 gap-2">
          <li className="flex gap-2 items-center">
            <StarIcon className=" stroke-primario-300" />
            <p className="text-xs">Calificacion del instructor: {instructor.rating}</p>
          </li>
          <li className="flex gap-2 items-center">
            <MessageSquareIcon className=" stroke-primario-300" />
            <p className="text-xs">4.3 ({instructor.totalReviews} Reseñas)</p>
          </li>
          <li className="flex gap-2 items-center">
            <GraduationCapIcon className=" stroke-primario-300" />
            <p className="text-xs">{instructor.students} estudiantes</p>
          </li>
          <li className="flex gap-2 items-center">
            <VideoIcon className=" stroke-primario-300" />
            <p className="text-xs">{instructor.courses} Cursos</p>
          </li>
        </ul>
        {/* TODO - agregar link valido para id al perfil del instructor */}
        <Link className="self-end hover:underline text-primario-200 text-sm" href={"#"}>Visitar Perfil</Link>
      </Section>
      <Section className="bg-card flex-row justify-center">
        <Image src={"/imgs/appsheet-logo.webp"} alt="appsheet logo image" width={32} height={32} />
        <p>AppSheet</p>
      </Section>
      <ModulosAccordion modulos={courseProgram} />
      <section className="flex flex-col gap-6 items-center">
        <Button size={"big"}>Comprar Curso</Button>
        <Button
          onClick={() => fetchAndAddCourse(id as string)}
          disabled={courseAlreadyInCart}
          variant={"outlined"}
          size={"big"}
        >
          Añadir al carrito
        </Button>
      </section>
      <section className="p-4 rounded-lg border border-primario-300 flex flex-col gap-6">
        <p className="font-bold text-sm">Con la compra de este curso tiene un 50% OFF en la compra de “Título del producto”. </p>
        {/* <CourseCard /> */}
      </section>
    </aside>
  )
}
