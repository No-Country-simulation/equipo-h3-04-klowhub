import Image from "next/image"
import Link from "next/link"

const DASHBOARD_NAV = [
  {
    value: "Mis Cursos",
    path: "/dashboard/courses"
  },
  {
    value: "Explorar Proyectos",
    path: "/"
  },
  {
    value: "Mis Aplicaciones",
    path: "/"
  },
  {
    value: "Consultas Técnicas",
    path: "/"
  },
]

export function DashboardNav() {
  return (
    <ul className="flex gap-7 items-center">
      {
        DASHBOARD_NAV.map((link) =>
          <Link href={link.path} className="group relative overflow-hidden rounded-lg h-24 w-full  flex items-center justify-center" key={link.value}>
            <Image src="/imgs/Until Choice (1).png" fill className="z-0 group-hover:scale-105 transition absolute w-full h-full object-cover object-left" alt="Dashboard banner" />
            <p className="relative font-semibold">
              {link.value}
            </p>
          </Link>)
      }
    </ul>
  )
}
