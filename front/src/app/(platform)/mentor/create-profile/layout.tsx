import { AsideCard } from "@/components/forms/AsideCard";
import { NavigationTabs } from "@/components/ui/NavigationTabs";
import { Section } from "@/components/ui/Section";
import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { TABS } from "./steps-paths";

export default function CreateCourseLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col gap-12">
      <Header />
      <NavigationTabs links={TABS} />
      <Section className="bg-card grid grid-cols-1 xl:grid-cols-[1fr_minmax(auto,300px)] gap-32">
        {children}
        <AsideCard />
      </Section>
    </section>
  )
}
