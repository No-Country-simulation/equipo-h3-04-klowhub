import TextTitleSub from "@/components/text/titlesubtitle"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { TickList } from "@/components/ui/tick-list"
import { VistaPreviaCompartir } from "../../dashboard/courses/vista-previa/_components/VistaPreviaCompartir"
import { VistaPreviaFunctionalities } from "../../dashboard/courses/vista-previa/_components/VistaPreviaFunctionalities"
import { VistaPreviaInstructor } from "../../dashboard/courses/vista-previa/_components/VistaPreviaInstructor"
import { courseData } from "../../dashboard/courses/vista-previa/data"
import { reviews } from "./data"
import { ReviewList } from "./ReviewList"

export function ExpandedInformation() {
  return (
    <section className='expanded-course-info'>
      <Section className='bg-card gap-7'>
        <VistaPreviaInstructor
          name={courseData.instructor.name}
          bio={courseData.instructor.bio}
          avatarSrc='/avatar.png'
        />
        <TickList
          title='Después de completar este curso, serás capaz'
          items={courseData.benefits}
        />
        <TextTitleSub
          title='Acerca de este curso'
          subtitle={courseData.about} />
        <Button size={"big"}>Añadir al carrito</Button>
        <VistaPreviaCompartir />
        <TextTitleSub
          title='¿Por qué aprender con Sebastián?'
          subtitle={courseData.whyToLearn} />
        <TextTitleSub
          title='¿Para quién es este curso?'
          subtitle={courseData.audience} />
        <TickList
          items={courseData.requirements}
          title='Requisitos'
        />
        <TickList
          items={courseData.includes}
          title='¿Qué incluye?'
        />
        <VistaPreviaFunctionalities
          functionalities={courseData.appInfo.functionalities}
          others={courseData.appInfo.other}
          sector={courseData.appInfo.sector}
          tools={courseData.appInfo.tools}
        />
        {/* TODO - Reemplazar reviews for informacion del backend */}
        <ReviewList reviews={reviews} />
      </Section>
    </section>
  )
}
