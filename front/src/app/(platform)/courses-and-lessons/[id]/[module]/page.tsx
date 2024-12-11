import { courseData } from "@/app/(platform)/dashboard/courses/vista-previa/data"
import CourseCard from "@/components/cards/course.card"
import TextTitleSub from "@/components/text/titlesubtitle"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/Button"
import { PlatformLink } from "@/components/ui/PlatformLink"
import { Section } from "@/components/ui/Section"
import { TickList } from "@/components/ui/tick-list"
import { courseService } from "@/services/course.service"
import { User } from "@nextui-org/react"
import { EllipsisVerticalIcon } from "lucide-react"
import { AsideMenu } from "./aside-menu"
import { MultimediaSection } from "./multimedia-section"

interface Props {
  params: Promise<{ module: string, id: string }>
}

export default async function ModulePage(props: Props) {
  const { module, id } = await props.params

  const course = await courseService({
    where: {
      id: id
    }
  })

  const recommendedCourses = await courseService({
    take: 3
  })

  return (
    <section className="flex flex-col gap-12">
      <Breadcrumbs paths={["Home", "Cursos y lecciones", "Gestión de inventarios con Power Apps"]} />
      <Section className="grid grid-cols-3 gap-6">
        <MultimediaSection />
        <AsideMenu />
      </Section>
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-16">
        <Section className="col-span-1 xl:col-span-2 gap-6">
          <header className="flex justify-between">
            <h2>{course[0].title}</h2>
            <button>
              <EllipsisVerticalIcon />
            </button>
          </header>
          <section className="flex justify-between">
            <User
              description="Instructor y desarrollador"
              name={"User"}
              avatarProps={{
                src: '/avatar.png',
                size: "lg"
              }} />
            <PlatformLink platform="Powerapps" />
          </section>
          <section className="flex justify-between">
            <Button>Subscribirme</Button>
            <Button variant={"outlined"}>Compartir</Button>
          </section>
          <TickList
            title='Después de completar este curso, serás capaz'
            items={courseData.benefits}
          />
          <TextTitleSub
            title='Acerca de este curso'
            subtitle={courseData.about} />
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
        </Section>
        <Section className="gap-6 h-fit">
          <p className="font-bold">Cursos que te pueden interesar </p>
          <ul className="flex flex-col gap-6">
            {
              recommendedCourses.map((course) =>
                <CourseCard key={course.id} course={course} />)
            }
          </ul>
        </Section>
      </section>
    </section>
  )
}
