import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Section } from "@/components/ui/Section"
import { AsideMenu } from "./aside-menu"
import { MultimediaSection } from "./multimedia-section"

interface Props {
  params: Promise<{ module: string }>
}

export default async function ModulePage(props: Props) {
  const { module } = await props.params

  return (
    <section className="flex flex-col gap-12">
      <Breadcrumbs paths={["Home", "Cursos y lecciones", "Gestión de inventarios con Power Apps"]} />
      <Section className="grid grid-cols-3 gap-6">
        <MultimediaSection />
        <AsideMenu />
      </Section>
    </section>
  )
}
