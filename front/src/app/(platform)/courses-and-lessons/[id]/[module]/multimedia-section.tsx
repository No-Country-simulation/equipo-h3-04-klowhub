"use client"

import { VideoPlayer } from "@/components/multimedia/video-player"
import { VideosGallery } from "@/components/multimedia/videos-gallery"
import { useState } from "react"

export function MultimediaSection() {
  const [selectedVideo, setSelectedVideo] = useState<string>("")

  return (
    <section className="col-span-2 rounded-lg flex flex-col gap-4">
      <VideoPlayer />
      <footer className="flex flex-col gap-2 bg-white/5 px-4 py-2 rounded-lg">
        <p className="text-sm">Vista Previa</p>
        <VideosGallery />
      </footer>
    </section>
  )
}
