import { VideoPlayer } from "@/components/multimedia/video-player";
import { VideosGallery } from "@/components/multimedia/videos-gallery";

export function VistaPreviaMultimedia() {
  return (
    <section>
      <VideoPlayer url='https://youtu.be/rIrNIzy6U_g?si=ILDQ-uqvaEfm1L2s' />
      <footer className='w-full flex flex-col'>
        <p className='p-2'>Contenido Gratuito</p>
        <VideosGallery />
      </footer>
    </section>
  )
}
