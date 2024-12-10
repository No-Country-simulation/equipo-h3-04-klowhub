import { VideosGallery } from "@/components/multimedia/videos-gallery";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player").then(m => m.default), {
  ssr: false,
})

export function VistaPreviaMultimedia() {
  return (
    <section>
      <figure className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-secundario-800">
        <DynamicReactPlayer
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
