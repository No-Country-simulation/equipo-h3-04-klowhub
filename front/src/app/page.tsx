import CourseCard from '@/components/cards/course.card';
import UltimateCourseCard from '@/components/cards/ultimatecourse.card';
import { Navbutton } from '@/components/navbar/navbutton';
import TextTitleSub from '@/components/text/titlesubtitle';
import { courseService } from '@/services/course.service';
import { useUserStore } from '@/store/user.store';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  const courses = await courseService({
    take: 3,
    relations: ['sectors', 'contentPillars', 'functionalities', 'platforms', 'platformsAndTool']
  })

  return (
    <div className='ml-10 mr-10 mt-5'>
      <Navbutton />
      <div className='mt-5 mb-5'>
        <UltimateCourseCard />
      </div>
      <TextTitleSub title='Cursos recomendados' subtitle='Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica tus conocimientos en proyectos reales.' />
      <div className="grid grid-cols-3 gap-4 pt-6">
        {courses.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
}
