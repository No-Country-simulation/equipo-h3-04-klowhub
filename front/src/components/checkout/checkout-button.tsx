import { PropsWithChildren } from "react";

export function CheckoutButton({ children }: PropsWithChildren) {
  return (
    <button className="rounded-lg bg-primario-100 p-3 flex justify-center items-center">
      {children}
    </button>
  )
}