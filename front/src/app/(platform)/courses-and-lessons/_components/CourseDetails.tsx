import { VideoPlayer } from "@/components/multimedia/video-player";
import TextTitleSub from "@/components/text/titlesubtitle";
import { Button } from "@/components/ui/Button";
import { PlatformLink } from "@/components/ui/PlatformLink";
import { Course } from "@/interfaces/course";
import { ModalBody } from "@nextui-org/react";
import Link from "next/link";
import { CourseInformation } from "../../dashboard/courses/vista-previa/_components/CourseInformation";
import { VistaPreviaCompartir } from "../../dashboard/courses/vista-previa/_components/VistaPreviaCompartir";
import { VistaPreviaInstructor } from "../../dashboard/courses/vista-previa/_components/VistaPreviaInstructor";

type Props = {
  selectedCourse: Course | null
}

export function CourseDetails({ selectedCourse }: Props) {
  if (!selectedCourse) {
    return null
  }

  return (
    <ModalBody>
      <TextTitleSub
        subtitle={selectedCourse!.description}
        title={selectedCourse!.title}
      />
      <PlatformLink platform="Powerapps" />
      <CourseInformation
        duration={"2 horas"}
        rating={3}
        reviews={12}
        videos={12}
      />
      <section>
        <VideoPlayer />
      </section>
      <VistaPreviaInstructor
        bio="Experto en desarrollo de aplicaciones no-code con más de 5 años de experiencia en AppSheet y Power Apps, ayudando a empresas y emprendedores."
        avatarSrc="/avatar.png"
        name="Sebastián Ríos"
      />
      <TextTitleSub
        // TODO - obtener informacion acerca del curso = selectedCourse.about
        subtitle={selectedCourse!.description}
        title="Acerca de este curso"
      />
      <Link href={`/courses-and-lessons/${selectedCourse?.id}`}>
        <Button size="big" variant="outlined">Ver detalles</Button>
      </Link>
      <VistaPreviaCompartir />
    </ModalBody>
  )
}
