import { Banner } from "./Banner";
import { DashboardNav } from "./DashboardNav";
import { MyProjects } from "./MyProjects";
import { Recomendations } from "./recomendations/Recommendations";
import { Scheduler } from "./scheduler/Scheduler";

export default function DashboardPage() {
  return (
    <section className="flex flex-col p-14 gap-12">
      <Banner />
      <DashboardNav />
      <MyProjects />
      <Scheduler />
      <Recomendations />
    </section>
  )
}
