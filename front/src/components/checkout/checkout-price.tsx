interface CheckoutPriceProps {
  label: string;
  amount: string
}

export function CheckoutPrice({ amount, label }: CheckoutPriceProps) {
  return (
    <section className="flex justify-between flex-wrap">
      <p>{label}</p>
      <span className="font-bold">{amount}</span>
    </section>
  )
}