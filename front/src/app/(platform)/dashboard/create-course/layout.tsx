import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { CreateCourseFormStepper } from "./CreateCourseFormStepper";
import { CreateCourseHeader } from "./CreateCourseHeader";

export default function CreateCourseLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col gap-12">
      <CreateCourseHeader />
      <CreateCourseFormStepper />
      <Section className="bg-card grid grid-cols-1 xl:grid-cols-[1fr_minmax(auto,300px)] gap-32">
        {children}
        <section className="hidden xl:flex flex-col gap-5 rounded-lg overflow-hidden">
          <Image className="object-cover" width={300} height={250} alt="form aside image" src="/imgs/form-aside.webp" />
          <footer className="relative flex flex-col gap-3 items-center">
            <p className="font-bold text-sm">Optimiza tu Perfil</p>
            <p className="text-center text-sm">Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos.</p>
          </footer>
        </section>
      </Section>
    </section>
  )
}
