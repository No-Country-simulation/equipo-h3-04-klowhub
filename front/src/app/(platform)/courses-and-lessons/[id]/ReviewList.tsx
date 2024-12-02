import { RatingStars } from "@/components/ui/RatingSection";

interface Review {
  author: string;
  rating: number;
  content: string;
}

interface Props {
  reviews: Review[]
}

export function ReviewList({ reviews }: Props) {
  return (
    <ul className="flex flex-col divide-y divide-primario-200">
      {
        reviews.map((review, index) =>
          <Review key={index} review={review} />)
      }
    </ul>
  )
}

interface ReviewProps {
  review: Review
}

export function Review({ review: { author, content, rating } }: ReviewProps) {
  return (
    <li className="flex flex-col gap-4 py-4">
      <header className="flex gap-4 items-center">
        <RatingStars rating={rating} />
        <p className="capitalize font-semibold">{author}</p>
      </header>
      <p className="text-sm">{content}</p>
    </li>
  )
}