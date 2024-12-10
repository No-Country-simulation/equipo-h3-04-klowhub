"use client"

import { VideosGallery } from "@/components/multimedia/videos-gallery"
import { useState } from "react"
import ReactPlayer from "react-player"

export function MultimediaSection() {
  const [selectedVideo, setSelectedVideo] = useState<string>("")

  return (
    <section className="col-span-2 rounded-lg flex flex-col gap-4">
      <figure className="aspect-video rounded-xl overflow-hidden">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          controls={true}
          height={"100%"}
          width={"100%"}
        />
      </figure>
      <footer className="flex flex-col gap-2 bg-white/5 px-4 py-2 rounded-lg">
        <p className="text-sm">Vista Previa</p>
        <VideosGallery />
      </footer>
    </section>
  )
}
