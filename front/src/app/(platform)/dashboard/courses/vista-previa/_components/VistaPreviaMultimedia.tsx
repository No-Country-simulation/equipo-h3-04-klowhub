"use client"

import { VideosGallery } from "@/components/multimedia/videos-gallery";
import ReactPlayer from "react-player";

export function VistaPreviaMultimedia() {
  return (
    <section>
      <figure className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-secundario-800">
        <ReactPlayer
          url='https://youtu.be/rIrNIzy6U_g?si=ILDQ-uqvaEfm1L2s'
          controls={true}
          height={"100%"}
          width={"100%"}
        />
      </figure>
      <footer className='w-full flex flex-col'>
        <p className='p-2'>Contenido Gratuito</p>
        <VideosGallery />
      </footer>
    </section>
  )
}
