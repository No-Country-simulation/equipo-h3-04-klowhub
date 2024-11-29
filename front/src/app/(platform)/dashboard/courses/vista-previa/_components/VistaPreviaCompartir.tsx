import SocialIcon from "@/components/icons/social";

export function VistaPreviaCompartir() {
  return (
    <section className='flex gap-4 items-center'>
      <p className='text-xs'>Compartir</p>
      <ul className='flex gap-2'>
        {SocialIcon({ icon: "mail" })}
        {SocialIcon({ icon: "whatsapp" })}
        {SocialIcon({ icon: "messenger" })}
        {SocialIcon({ icon: "linkedin-mini" })}
      </ul>
    </section>
  )
}
