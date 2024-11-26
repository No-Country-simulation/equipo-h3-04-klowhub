import { TechnicalInquiries } from "../technical-inquiries/TechnicalInquiries";
import { Banner } from "./Banner";
import { DashboardNav } from "./DashboardNav";
import { MyProjects } from "./my-projects/MyProjects";
import { Recomendations } from "./recomendations/Recommendations";
import { SalesChart } from "./sales-chart/SalesChart";
import { Scheduler } from "./scheduler/Scheduler";

export default function DashboardPage() {
  return (
    <section className="flex flex-col p-14 gap-12">
      <Banner />
      <DashboardNav />
      <MyProjects />
      <Scheduler />
      <Recomendations />
      <SalesChart />
      <TechnicalInquiries />
    </section>
  )
}
