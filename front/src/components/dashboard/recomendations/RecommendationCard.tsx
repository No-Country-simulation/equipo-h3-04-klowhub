import { PlatformLink } from "@/components/ui/PlatformLink"
import { User } from "@nextui-org/react"
import { HeartIcon, LinkIcon, MenuIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import { Recommendation } from "./Recommendations"

const AVATAR_SRC = "https://s3-alpha-sig.figma.com/img/3f2b/45a6/6b21a2ba93c0fc519f3b03de9d622c14?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPIegTsB3UDYFnIaqdqH14SR8-pbMpIAARYz6kyQ8MlvoakwXkAwWT3P7rqKz4d0ggw9pixV8l8h2uFMQ8fczob-qbyLm~uSB8EnOH4ScPrgCM9giqrxg0MQKf-omhtcJWdpZMZTCEMavZ92sZCfAjje9S9hqEU62rQAz-sH~VyzsUWXM80bdIq-UhwXHeuYB1CEO34oGOR175FnfwMbceKa8oe2f0QB7UqtQ0eY4xPRd6~a-pg1z3ifiCbl-JFLmhLqKO-Slv5v3qAR-ZD1sjwYAc4Z-IQUQ1FjZHvl5SNhMK34f8lzQPd7vAmrlw459s2LEEGkBBkABCOVdERA3g__"

interface Props {
  recommendation: Recommendation
}

export function RecommendationCard({ recommendation }: Props) {
  return (
    <div className="bg-card p-6 flex flex-col gap-4">
      <header className="place-self-end flex gap-4 items-center">
        <LinkIcon />
        <HeartIcon />
        <MenuIcon />
      </header>
      <p className="text-xs">{`Publicado ${recommendation.publishedAgo}`}</p>
      <h3 className="font-semibold">{recommendation.title}</h3>
      <p className="">{recommendation.description}</p>
      <div className="flex gap-5 items-center">
        {recommendation.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-primario-100 text-primario-400 rounded-lg capitalize font-bold text-sm">
            {tag}
          </span>
        ))}
      </div>
      <PlatformLink platform="AppSheet" />
      <User
        className="self-start"
        avatarProps={{ src: AVATAR_SRC, alt: `${recommendation.instructor.name}'s avatar`, size: "lg" }}
        name={recommendation.instructor.name}
        description={<p>{recommendation.instructor.role}</p>}>
      </User>
      <p className="flex gap-2 items-center"><StarIcon fill="#f4ff3f" strokeWidth={0} /> {`Calificación del instructor: ${recommendation.rating}`}</p>
      {/* TODO - usar un link valido para el detalle de usuario */}
      <Link href="#" className="place-self-end hover:underline">{recommendation.detailsText}</Link>
    </div>
  )
}
