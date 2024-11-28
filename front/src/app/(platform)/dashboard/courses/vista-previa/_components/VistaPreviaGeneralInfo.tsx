import { ClockIcon, StarIcon, VideoIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  videos: number;
  duration: string;
}

export function VistaPreviaGeneralInfo({ description, duration, rating, reviews, title, videos }: Props) {
  return (
    <section className='flex flex-col gap-6'>
      <section className='flex flex-col gap-3'>
        <p className='font-bold'>{title}</p>
        <p className='text-sm'>{description}</p>
      </section>
      <footer className='flex items-center gap-4'>
        <section className='flex items-center gap-2'>
          <p>{rating}</p>
          <div className='flex gap-1'>
            {
              Array(5).fill(1).map((n, index) =>
                <StarIcon
                  kernelMatrix={index}
                  className={`stroke-0 ${(index + 1) <= rating ? "fill-yellow-400" : "fill-white"}`} />
              )
            }
          </div>
          <p>({reviews})</p>
        </section>
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
    </section>
  )
}
