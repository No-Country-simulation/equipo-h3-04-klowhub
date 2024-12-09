'use client'

import OptimatePerfil from "@/components/cards/optimate.perfil.card"
import PerfilCard from "@/components/cards/perfil.card"
import TextTitleSub from "@/components/text/titlesubtitle"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SupportMessage } from "@/components/ui/support-message"

export default function Perfil() {


  return (
    <div className="p-4 max-w-7xl mx-auto items-between flex flex-col gap-12">
      <Breadcrumbs paths={["Home", "Perfil de mentor"]} />

      <TextTitleSub title="Perfil de mentor" subtitle=""></TextTitleSub>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Card */}
        <PerfilCard
          className="w-full md:w-2/3 border-none " // Aquí pasas el className
          avatarSrc="/avatar.png"
          userName="Martin Fernandez"
          sellerType="Vendedor"
          publishedCourses={2}
          createdApps={3}
          subscribers={3}
          mentorshipDescription="Además de vender tus cursos y apps, ahora puedes ofrecer sesiones de mentoría personalizadas a otros creadores y emprendedores. Comparte tu experiencia y ayuda a otros a alcanzar sus objetivos, mientras expandes tu red y monetizas tus conocimientos. Conviértete en mentor y deja tu huella en la comunidad."
        />

        {/* Optimization Card */}
        <OptimatePerfil
          className="w-full md:w-1/3 border-none" // Aquí pasas el className
          imageSrc="/imgs/DALL·E 2024-09-14 20.34.30.webp"
          title="Optimiza tu Perfil"
          description="Optimiza tu perfil y lleva tus apps al siguiente nivel. Accede a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos."
          buttonText="Ir a los recursos"
        />
      </div >
      <SupportMessage />
    </div >
  )
}