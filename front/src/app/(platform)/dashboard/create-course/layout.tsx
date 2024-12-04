import { AsideCard } from "@/components/forms/AsideCard";
import { Section } from "@/components/ui/Section";
import { PropsWithChildren } from "react";
import { NavigationTabs } from "../../../../components/ui/NavigationTabs";
import { CreateCourseHeader } from "./CreateCourseHeader";
import { TABS } from "./steps-paths";

export default function CreateCourseLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col gap-12">
      <CreateCourseHeader />
      <NavigationTabs links={TABS} />
      <Section className="bg-card grid grid-cols-1 xl:grid-cols-[1fr_minmax(auto,300px)] gap-32">
        {children}
        <AsideCard />
      </Section>
    </section>
  )
}
