import CardMore from '@/components/cards/card.more';
import UltimateCourseCard from '@/components/cards/ultimatecourse.card';
import { Navbutton } from '@/components/navbar/navbutton';
import LatestQueries from '@/components/querys/latestqueries';
import TextTitleSub from '@/components/text/titlesubtitle';
import Image from 'next/image';

export default async function Home() {


  return (
    <div className='ml-10 mr-10 mt-5 mb-5'>
      <Navbutton />
      <div className='mt-5 mb-5'>
        <UltimateCourseCard />
      </div>
      <TextTitleSub title='Cursos recomendados' subtitle='Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica tus conocimientos en proyectos reales.' />
      <CardMore service="course" />
      <TextTitleSub title='Aplicaciones recomendadas' subtitle='Descubre los cursos más destacados y lleva tus habilidades al siguiente nivel. Aprende de expertos y aplica tus conocimientos en proyectos reales.' />

      <CardMore service="app" />
      <div className='mt-20 mb-20'>
        <TextTitleSub title='Ultimas consultas' subtitle='' />
        <LatestQueries />
      </div>

      <div className="relative text-white border-none w-full h-40 p-10">
        <Image
          alt="profile avatar"
          className="relative object-cover  transition-transform duration-300 transform " // Asegúrate de que la imagen ocupe el contenedor
          src="/imgs/Presentación Workshop SEO Moderno 3D Lila (1).png"
          fill
        />
        <h3 className="relative text-lg font-bold">
          Conecta con Expertos
        </h3>
        <p className="relative m-2 ml-0 text-sm text-gray-400">Aprende de los mejores: Impulsa tu conocimiento con nuestros mentores especializados</p>
      </div>
      <CardMore service="app" />
    </div>
  );
}
