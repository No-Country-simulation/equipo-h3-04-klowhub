import { PLATAFORMA } from "@/constants/filters";
import Image from "next/image";
import Link from "next/link";

interface Props {
  platform: typeof PLATAFORMA[number]
}

export function PlatformLink({ platform }: Props) {
  const imgSrc = platform === "AppSheet" ? "/imgs/appsheet-logo.webp" : "/imgs/powerapp-logo.png"

  return (
    <Link href="#" className="w-fit bg-white/10 rounded-lg px-4 py-2 flex gap-2 items-center">
      <Image width={24} height={24} alt="appsheet icon" src={imgSrc} />
      {platform}
    </Link>
  )
}
