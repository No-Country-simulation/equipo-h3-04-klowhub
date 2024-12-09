"use client"

import { VideosGallery } from "@/components/multimedia/videos-gallery"
import { useState } from "react"
import ReactPlayer from "react-player"

export function MultimediaSection() {
  const [selectedVideo, setSelectedVideo] = useState<string>("")

  return (
    <section className="col-span-2 rounded-lg">
      <figure className="aspect-video rounded-xl overflow-hidden">
        <ReactPlayer
          height={"100%"}
          controls={true}
          width={"100%"}
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
      </figure>
      <footer>
        <VideosGallery />
      </footer>
    </section>
  )
}
