"use client"

import { Button } from "@nextui-org/react"
import Image from 'next/image';



export function Navbutton() {
  return (
    <nav className="grid grid-cols-2 gap-4 xl:grid-cols-4 ">
      <Button variant="ghost" className="relative text-white border-none w-full h-20">
        <Image
          alt="profile avatar"
          className="object-cover scale-125  transition-transform duration-300 transform hover:scale-150" // Asegúrate de que la imagen ocupe el contenedor
          src="/backbutton.png"
          fill
        />
        <span className="relative z-10"> {/* Asegúrate de que el texto esté por encima de la imagen */}
          Aprende en KlowHub
        </span>
      </Button>
      <Button variant="ghost" className="relative text-white border-none w-full h-20">
        <Image
          alt="profile avatar"
          className="object-cover scale-125  transition-transform duration-300 transform hover:scale-150" // Asegúrate de que la imagen ocupe el contenedor
          src="/backbutton.png"
          fill
        />
        <span className="relative z-10"> {/* Asegúrate de que el texto esté por encima de la imagen */}
          Encuentra aplicaciones
        </span>
      </Button>
      <Button variant="ghost" className="relative text-white border-none w-full h-20">
        <Image
          alt="profile avatar"
          className="object-cover scale-125  transition-transform duration-300 transform hover:scale-150" // Asegúrate de que la imagen ocupe el contenedor
          src="/backbutton.png"
          fill
        />
        <span className="relative z-10"> {/* Asegúrate de que el texto esté por encima de la imagen */}
          Publica proyectos
        </span>
      </Button>
      <Button variant="ghost" className="relative text-white border-none w-full h-20">
        <Image
          alt="profile avatar"
          className="object-cover scale-125  transition-transform duration-300 transform hover:scale-150" // Asegúrate de que la imagen ocupe el contenedor
          src="/backbutton.png"
          fill
        />
        <span className="relative z-10"> {/* Asegúrate de que el texto esté por encima de la imagen */}
          Consultas técnicas
        </span>
      </Button>

    </nav>
  )
}

