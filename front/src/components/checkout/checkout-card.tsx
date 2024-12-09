import { Input } from "@nextui-org/react";
import { EthereumiIcon } from "../icons/ethereum-icon";
import { PaypalIcon } from "../icons/paypal-icon";
import { StripeIcon } from "../icons/stripe-icon";
import { Section } from "../ui/Section";
import { CheckoutButton } from "./checkout-button";
import { CheckoutPrice } from "./checkout-price";

export function CheckoutCard() {
  return (
    <Section className="flex flex-col gap-4 max-w-[400px] bg-card h-fit">
      <p className="font-bold text-xl">Resumen</p>
      <section className="flex flex-col gap-2">
        <CheckoutPrice amount="$6.071" label="Subtotal" />
        <CheckoutPrice amount="$130" label="Tarifa de Servicio" />
      </section>
      <section className="flex flex-col gap-3 pt-4">
        <p>Cupón de descuento</p>
        <div className="grid grid-cols-3 gap-4 flex-wrap">
          <Input placeholder="Ingresar Cupón" classNames={{ base: "col-span-2", inputWrapper: "bg-transparent border border-white rounded-lg", }} />
          <button className="rounded-lg border border-white text-sm">
            Ingresar
          </button>
        </div>
      </section>
      <CheckoutPrice amount="20%" label="Cupón HotSale" />
      <CheckoutPrice amount="$6.201" label="Total" />
      <section className="flex flex-col gap-2">
        <p>Seleccione un método de pago</p>
        <footer className="grid grid-cols-3 gap-4">
          <CheckoutButton>
            <StripeIcon />
          </CheckoutButton>
          <CheckoutButton>
            <PaypalIcon />
          </CheckoutButton>
          <CheckoutButton>
            <EthereumiIcon />
          </CheckoutButton>
        </footer>
      </section>
    </Section>
  )
}
