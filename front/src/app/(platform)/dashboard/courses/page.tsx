import { Section } from "@/components/ui/Section";
import { CoursesHeader } from "./CoursesHeader";
import { CreatedCourses } from "./CreatedCourses";
import { RecentMovements } from "./RecentMovements";

export default function MyCoursesPage() {
  return (
    <section className="flex flex-col gap-6">
      <CoursesHeader />
      <Section className="bg-card flex flex-col gap-12">
        <RecentMovements />
        <CreatedCourses />
      </Section>
    </section>
  )
}
