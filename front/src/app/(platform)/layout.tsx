import NavBar from "@/components/navbar/navprincipal";
import { PropsWithChildren } from "react";

export default function PlatformLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <NavBar />
      </div>
      <main className="flex-grow p-14 max-w-screen-2xl mx-auto w-full pb-20">
        {children}
      </main>
    </div>
  )
}
