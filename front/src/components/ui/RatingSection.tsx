import { StarIcon } from "lucide-react";

interface Props {
  rating: number;
  reviews: number;
}

export function RatingSection({ rating, reviews }: Props) {
  return (
    <section className='flex items-center gap-2'>
      <p>{rating}</p>
      <RatingStars rating={rating} />
      <p>({reviews})</p>
    </section>
  )
}

interface RatingStarsProps {
  rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className='flex gap-1'>
      {
        Array(5).fill(1).map((n, index) =>
          <StarIcon
            className={`stroke-0 ${(index + 1) <= rating ? "fill-yellow-400" : "fill-white"}`}
            key={index}
          />
        )
      }
    </div>
  )
}

