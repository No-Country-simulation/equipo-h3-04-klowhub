import TextTitleSub from "@/components/text/titlesubtitle";
import { VistaPreviaInstructor } from "../../dashboard/courses/vista-previa/_components/VistaPreviaInstructor";
import { VistaPreviaList } from "../../dashboard/courses/vista-previa/_components/VistaPreviaList";
import { courseData } from "../../dashboard/courses/vista-previa/data";

// TODO - pasar informacion del curso, no usar courseData (información estática)
interface Props {
  onShowMore: () => void
}

export function ShortInformation({ onShowMore }: Props) {
  return (
    <section className='minified-course-info'>
      <section className='flex flex-col gap-7 [mask-image:linear-gradient(215deg,#000_50%,transparent_100%)]'>
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
      </section>
      <footer className='flex items-center justify-center p-20'>
        <button
          className='py-4 text-primario-200 hover:bg-primario-200 hover:text-primario-600 transition rounded-lg px-8'
          onClick={onShowMore}
        >
          Ver más
        </button>
      </footer>
    </section>
  )
}
