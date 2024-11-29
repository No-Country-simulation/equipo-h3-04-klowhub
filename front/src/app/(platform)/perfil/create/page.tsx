'use client'

import { Tabs, Tab, Input, Button, RadioGroup, Radio, Select, SelectItem } from "@nextui-org/react"
import { Image } from "@nextui-org/image"
import { Upload } from 'lucide-react'
import OptimatePerfil from "@/components/cards/optimate.perfil.card"

export default function MentorProfile() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-7xl mx-auto">
      <div className="w-full md:w-2/3">
        <Tabs aria-label="Secciones del perfil" color="secondary" variant="underlined">
          <Tab key="general" title="Información general" className="text-purple-500">
            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-lg mb-2">¿En qué áreas sos un experto?</h2>
                <Select
                  label="Elegí al menos un área"
                  className="max-w-md"
                >
                  <SelectItem key="dev">Desarrollo Web</SelectItem>
                  <SelectItem key="design">Diseño UX/UI</SelectItem>
                  <SelectItem key="marketing">Marketing Digital</SelectItem>
                </Select>
              </div>

              <div>
                <h2 className="text-lg mb-2">¿Cuál es el costo de tu hora de mentoría?</h2>
                <Input
                  type="number"
                  label="Ingresa el monto por hora"
                  placeholder="0.00"
                  className="max-w-md"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-lg">Indica tu nivel de expertise</h2>
                <RadioGroup orientation="vertical">
                  <Radio value="junior">Junior</Radio>
                  <Radio value="mid">Mid-Level</Radio>
                  <Radio value="senior">Senior</Radio>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg">¿Con qué plataformas sueles trabajar?</h2>
                <RadioGroup orientation="vertical">
                  <Radio value="appsheet">AppSheet</Radio>
                  <Radio value="powerapps">PowerApps</Radio>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg">¿En qué idiomas ofreces las mentorías?</h2>
                <Select
                  label="Seleccionar idioma"
                  className="max-w-md"
                >
                  <SelectItem key="es">Español</SelectItem>
                  <SelectItem key="en">Inglés</SelectItem>
                  <SelectItem key="pt">Portugués</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg">¿En qué área te especializas?</h2>
                <Select
                  label="Pilar de contenido"
                  className="max-w-md"
                >
                  <SelectItem key="dev">Desarrollo</SelectItem>
                  <SelectItem key="design">Diseño</SelectItem>
                  <SelectItem key="business">Negocios</SelectItem>
                </Select>
              </div>
            </div>
          </Tab>

          <Tab key="experiencia" title="Experiencia">
            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-lg mb-2">Seleccioná los sectores en las que tenés experiencia</h2>
                <Select
                  label="Seleccionar sector"
                  className="max-w-md"
                >
                  <SelectItem key="tech">Tecnología</SelectItem>
                  <SelectItem key="edu">Educación</SelectItem>
                  <SelectItem key="health">Salud</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg">Describí la experiencia que posee en estos sectores</h2>
                <div className="border rounded-lg p-2">
                  {/* Rich text editor toolbar */}
                  <div className="flex gap-2 mb-2 border-b pb-2">
                    <Button size="sm" variant="light">B</Button>
                    <Button size="sm" variant="light">I</Button>
                    <Button size="sm" variant="light">U</Button>
                    <Button size="sm" variant="light">{"<>"}</Button>
                  </div>
                  <textarea
                    className="w-full min-h-[200px] bg-transparent outline-none resize-none"
                    placeholder="Describe la experiencia"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg mb-2">¿Con qué herramientas tenés experiencia?</h2>
                <Input
                  label="Herramientas y plataformas"
                  placeholder="Ej: React, Node.js, Figma"
                  className="max-w-md"
                />
              </div>
            </div>
          </Tab>

          <Tab key="educacion" title="Educación">
            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg">Detallá la formación académica y las certificaciones que avalen tu conocimiento</h2>
                <div className="border rounded-lg p-2">
                  {/* Rich text editor toolbar */}
                  <div className="flex gap-2 mb-2 border-b pb-2">
                    <Button size="sm" variant="light">B</Button>
                    <Button size="sm" variant="light">I</Button>
                    <Button size="sm" variant="light">U</Button>
                    <Button size="sm" variant="light">{"<>"}</Button>
                  </div>
                  <textarea
                    className="w-full min-h-[200px] bg-transparent outline-none resize-none"
                    placeholder="Escribe tu formación académica"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-lg mb-4">Agregá certificaciones relevantes</h2>
                <div className="border-2 border-dashed border-purple-500 rounded-lg p-8 text-center max-w-md">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                  <p className="text-sm text-purple-500 mb-2">
                    Sube una foto clara de la parte delantera del documento.
                  </p>
                  <p className="text-xs text-gray-400">
                    Arrastre o haga click aquí para subir los archivos
                  </p>
                </div>
                <Input
                  label="Enlace"
                  placeholder="https://"
                  className="max-w-md mt-4"
                />
              </div>
            </div>
          </Tab>
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button color="secondary" className="bg-purple-600">
            Continuar
          </Button>
        </div>
      </div>

      <OptimatePerfil
        className="w-full md:w-1/3 border-none" // Aquí pasas el className
        imageSrc="/imgs/DALL·E 2024-09-14 20.34.30.webp"
        title="Optimiza tu Perfil"
        description="Optimiza tu perfil y lleva tus apps al siguiente nivel. Accede a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos."
        buttonText="Ir a los recursos"

      />
    </div>
  )
}
