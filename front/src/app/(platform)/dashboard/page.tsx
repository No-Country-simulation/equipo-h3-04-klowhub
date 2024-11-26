import { Banner } from "./Banner";
import { DashboardNav } from "./DashboardNav";

export default function DashboardPage() {
  return (
    <section className="flex flex-col p-14 gap-12">
      <Banner />
      <DashboardNav />
    </section>
  )
}
