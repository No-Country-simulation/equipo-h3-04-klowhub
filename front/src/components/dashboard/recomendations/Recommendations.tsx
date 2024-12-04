import { Button } from "@/components/ui/Button";
import { RecommendationCard } from "./RecommendationCard";

const cardsData = [
  {
    id: 1,
    publishedAgo: "hace 3 días",
    title: "Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.",
    description:
      "Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.",
    tags: ["CRM", "Clientes", "Ventas"],
    platform: "AppSheet",
    instructor: {
      name: "Santiago López",
      role: "Instructor y desarrollador",
      avatar: "/path-to-avatar.jpg", // Replace with the actual avatar path
      badge: "PRO",
    },
    rating: 5,
    detailsText: "Ver detalles",
  },
  {
    id: 2,
    publishedAgo: "hace 3 días",
    title: "Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.",
    description:
      "Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.",
    tags: ["CRM", "Clientes", "Ventas"],
    platform: "AppSheet",
    instructor: {
      name: "Santiago López",
      role: "Instructor y desarrollador",
      avatar: "/path-to-avatar.jpg",
      badge: "PRO",
    },
    rating: 5,
    detailsText: "Ver detalles",
  },
  {
    id: 3,
    publishedAgo: "hace 3 días",
    title: "Solución integral para la gestión de tareas y seguimiento de proyectos en tiempo real.",
    description:
      "Crear una aplicación que permita a los equipos organizar, asignar y priorizar tareas diarias de manera intuitiva.",
    tags: ["CRM", "Clientes", "Ventas"],
    platform: "AppSheet",
    instructor: {
      name: "Santiago López",
      role: "Instructor y desarrollador",
      avatar: "/path-to-avatar.jpg",
      badge: "PRO",
    },
    rating: 5,
    detailsText: "Ver detalles",
  },
];

export type Recommendation = typeof cardsData[number]

export function Recomendations() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col gap-6">
        <p className="font-bold">Oportunidades que se alinean con tu perfil</p>
        <p className="text-sm">Explorá las postulaciones recomendadas especialmente para vos. Estas oportunidades están diseñadas para que encuentres el próximo paso en tu carrera de forma fácil y rápida. ¡No dejes pasar la chance de postularte a tu próximo desafío profesional!</p>
      </header>
      <ul className="flex flex-wrap *:flex-1 gap-6">
        {
          cardsData.map(recomendation =>
            <RecommendationCard key={recomendation.id} recommendation={recomendation} />)
        }
      </ul>
      <Button variant={"outlined"} className="mx-auto" size={"big"}>
        Ver Proyectos
      </Button>
    </section>
  )
}
