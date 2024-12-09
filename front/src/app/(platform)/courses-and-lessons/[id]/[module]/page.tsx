import { Section } from "@/components/ui/Section"
import { MultimediaSection } from "./multimedia-section"

interface Props {
  params: Promise<{ module: string }>
}

export default async function ModulePage(props: Props) {
  const { module } = await props.params

  return (
    <section>
      <Section className="grid grid-cols-3">
        <MultimediaSection />

      </Section>
    </section>
  )
}
