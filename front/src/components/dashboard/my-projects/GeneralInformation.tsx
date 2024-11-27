import Link from "next/link";

// TODO - cambiar informacion estatica por info del backend
export function GeneralInformation() {
  return (
    <aside className="col-span-4 lg:col-span-1 flex flex-col gap-2 self-end">
      <ul className="flex flex-row flex-wrap lg:flex-col gap-1">
        <InformationItem description="$2850" title="Ganancias totales del mes" />
        <InformationItem description="5" title="Cursos publicados" />
        <InformationItem description="11" title="Aplicaciones transferidas en el mes" />
        <InformationItem description="28" title="Horas de mentoria" />
      </ul>
      {/* TODO - Add valid href */}
      <Link href="#" className="text-acento-100 text-center text-sm hover:underline">Ver ganancias</Link>
    </aside>
  )
}

interface InformationProps {
  title: string;
  description: string;
}

function InformationItem({ description, title }: InformationProps) {
  return <li className="flex flex-1 flex-col text-center items-center justify-center gap-1 rounded-lg bg-white/10 p-3">
    <p className="text-sm">{title}</p>
    <p className="text-acento-400 font-bold">{description}</p>
  </li>
}