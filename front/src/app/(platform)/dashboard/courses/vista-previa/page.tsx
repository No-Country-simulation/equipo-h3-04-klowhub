// Static data, this should be replaced for data in global state
import TextTitleSub from '@/components/text/titlesubtitle'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import './_components/horizontal-scroll-bar.css'
import { VistaPreviaAside } from './_components/VistaPreviaAside'
import { VistaPreviaBreadcrumns } from './_components/VistaPreviaBreadcrumbs'
import { VistaPreviaCompartir } from './_components/VistaPreviaCompartir'
import { VistaPreviaFunctionalities } from './_components/VistaPreviaFunctionalities'
import { VistaPreviaGeneralInfo } from './_components/VistaPreviaGeneralInfo'
import { VistaPreviaInstructor } from './_components/VistaPreviaInstructor'
import { VistaPreviaList } from './_components/VistaPreviaList'
import { VistaPreviaMultimedia } from './_components/VistaPreviaMultimedia'
import { courseData } from './data'

export type CoursePreview = typeof courseData

export default async function VistaPreviaPage() {
  return (
    <section className='flex flex-col gap-6'>
      <VistaPreviaBreadcrumns />
      <section className='grid grid-cols-1 lg:grid-cols-[1fr_minmax(200px,400px)] gap-12'>
        <section className='flex flex-col gap-6'>
          <VistaPreviaGeneralInfo
            description={courseData.description}
            duration={courseData.duration}
            rating={courseData.rating}
            reviews={courseData.reviews}
            title={courseData.title}
            videos={courseData.videos} />
          <VistaPreviaMultimedia />
          <Section className='bg-card gap-7'>
            <VistaPreviaInstructor
              name={courseData.instructor.name}
              bio={courseData.instructor.bio}
              avatarSrc='/avatar.png'
            />
            <VistaPreviaList
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
            <VistaPreviaList
              items={courseData.requirements}
              title='Requisitos'
            />
            <VistaPreviaList
              items={courseData.includes}
              title='¿Qué incluye?'
            />
            <VistaPreviaFunctionalities
              functionalities={courseData.appInfo.functionalities}
              others={courseData.appInfo.other}
              sector={courseData.appInfo.sector}
              tools={courseData.appInfo.tools}
            />
          </Section>
        </section>
        <VistaPreviaAside
          instructor={courseData.instructor}
          courseProgram={courseData.courseProgram}
        />
      </section>
    </section >
  )
}

