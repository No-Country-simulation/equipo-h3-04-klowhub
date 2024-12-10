"use client"

import dynamic from "next/dynamic"
import { ReactPlayerProps } from 'react-player'

// Lazy loading porque tira un error de hidratación
const DynamicReactPlayer = dynamic(() => import("react-player").then(m => m.default), {
  ssr: false
})

// Si no recibe la prop url se muestra un video por default
export function VideoPlayer({ url = "https://youtu.be/6of9yHaGC78?si=1A09uQj1G0E_6ozd", ...args }: ReactPlayerProps) {
  return (
    <figure className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-secundario-800 bg-primario-900">
      <DynamicReactPlayer
        controls={true}
        height={"100%"}
        width={"100%"}
        url={url}
        {...args}
      />
    </figure>
  )
}
