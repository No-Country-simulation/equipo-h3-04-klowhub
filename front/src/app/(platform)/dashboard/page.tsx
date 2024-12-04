import { Banner } from "@/components/dashboard/Banner";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { MyProjects } from "@/components/dashboard/my-projects/MyProjects";
import { Recomendations } from "@/components/dashboard/recomendations/Recommendations";
import { SalesChart } from "@/components/dashboard/sales-chart/SalesChart";
import { Scheduler } from "@/components/dashboard/scheduler/Scheduler";
import { TechnicalInquiries } from "@/components/dashboard/technical-inquiries/TechnicalInquiries";

export default function DashboardPage() {
  return (
    <section className="flex flex-col gap-12">
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