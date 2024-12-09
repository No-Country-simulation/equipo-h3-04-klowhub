import { VideoPlayer } from "@/components/multimedia/video-player";
import { VideosGallery } from "@/components/multimedia/videos-gallery";

export function VistaPreviaMultimedia() {
  return (
    <section>
      <VideoPlayer />
      <footer className='w-full flex flex-col'>
        <p className='p-2'>Contenido Gratuito</p>
        <VideosGallery />
      </footer>
    </section>
  )
}
