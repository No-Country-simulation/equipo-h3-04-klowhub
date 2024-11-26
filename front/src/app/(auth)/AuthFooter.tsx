import SocialIcon from "@/components/icons/social"

const FOOTER_SECTIONS = [{
  title: "Categoria",
  links: ["Cursos", "Aplicaciones", "Vende un Curso", "Vende una App"]
},
{
  title: "Acerca de",
  links: ["Instructores", "Cursos", "Términos del Servicio", "Políticas de Privacidad"]
},
{
  title: "Soporte",
  links: ["FAQ", "Contacto", "Foro"]
}
]

export function AuthFooter() {
  return (
    <footer className="bg-gradient-to-r from-acento-900 via-acento-800 to-acento-700 ">
      <section className="w-full border-b border-white">
        <nav className="flex gap-28 max-w-screen-xl mx-auto w-full p-8 flex-wrap">
          {
            FOOTER_SECTIONS.map(section =>
              <article className="flex flex-col gap-4">
                <p className=" opacity-50">{section.title}</p>
                <ul className="flex flex-col gap-2" key={section.title}>
                  {section.links.map(link =>
                    <li className="" key={link}>{link}</li>)
                  }
                </ul>
              </article>)
          }
          <article className="flex flex-col gap-4">
            <p className=" opacity-50">Encuentranos En</p>
            <ul className="flex gap-6 items-center">
              {SocialIcon({ icon: "facebook" })}
              {SocialIcon({ icon: "twitter" })}
              {SocialIcon({ icon: "linkedin" })}
            </ul>
          </article>
        </nav>
      </section>
      <section className="text-center p-4">
        © Klowhub
      </section>
    </footer>
  )
}
