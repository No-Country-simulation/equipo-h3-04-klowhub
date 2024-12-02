import { TextSearchIcon } from "lucide-react";

export function CoursesNotFound() {
  return (
    <section className="bg-white/5 rounded-2xl text-primario-400 border border-primario-400 flex flex-col items-center justify-center p-20 border-dashed gap-4 h-full">
      <TextSearchIcon />
      <p className="font-bold text-sm text-center">
        No se encontraron cursos/lecciones que cumplan con los filtros seleccionados
      </p>
    </section>
  )
}
