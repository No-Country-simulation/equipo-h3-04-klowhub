import UltimateCourseCard from '@/components/cards/ultimatecourse.card';
import { Navbutton } from '@/components/navbar/navbutton';

export default function Home() {
  return (
    <div className='ml-10 mr-10 mt-5'>
      <Navbutton />
      <UltimateCourseCard />
    </div>
  );
}
