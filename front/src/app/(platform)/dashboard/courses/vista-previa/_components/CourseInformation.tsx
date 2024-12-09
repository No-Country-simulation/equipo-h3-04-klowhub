import { RatingSection } from '@/components/ui/RatingSection';
import { ClockIcon, VideoIcon } from 'lucide-react';

interface Props {
  duration: string;
  reviews: number;
  rating: number;
  videos: number;
}

export function CourseInformation({ duration, rating, reviews, videos }: Props) {
  return (
    <footer className='flex items-center gap-4'>
      <RatingSection rating={rating} reviews={reviews} />
      <section className='flex gap-2 items-center text-white/50'>
        <VideoIcon />
        <p className='text-sm'>
          {videos} videos
        </p>
      </section>
      <section className='flex gap-2 items-center text-white/50'>
        <ClockIcon />
        <p className='text-sm'>
          {duration}
        </p>
      </section>
    </footer>
  )
}

