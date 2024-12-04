import NavBar from "@/components/navbar/navprincipal";
import { PropsWithChildren } from "react";

export default function PlatformLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <NavBar />
      </div>
      <main className="flex-grow p-14">
        {children}
      </main>
    </div>
  )
}
