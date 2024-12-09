import Link from "next/link";

export function SupportMessage() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <p className="text-sm text-gray-400 text-center">¿Tenés alguna pregunta? No dudes en escribirnos a klowhub@soporte.com o visitar nuestro centro de ayuda. ¡Estamos aquí para asistirte!</p>
      <footer className="flex justify-center">
        <Link href="#" className="text-secundario-300 font-semibold hover:text-blue-700 p-2 text-sm transition">Centro de ayuda</Link>
        <Link href="#" className="text-secundario-300 font-semibold hover:text-blue-700 p-2 text-sm transition">Soporte</Link>
      </footer>
    </div>
  )
}