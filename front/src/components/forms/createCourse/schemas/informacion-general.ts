import { z } from 'zod';

export const informacionGeneralSchema = z.object({
  title: z
    .string()
    .min(1, 'El título es obligatorio')
    .max(100, 'El título no puede tener más de 100 caracteres'),
  contentType: z.enum(['gratuito', 'pago'], {
    errorMap: () => ({ message: 'Seleccioná un tipo de contenido' }),
  }),
  creationType: z.enum(['curso', 'lección'], {
    errorMap: () => ({ message: 'Seleccioná si es un curso o una lección' }),
  }),
  description: z
    .string()
    .min(1, 'La descripción es obligatoria')
    .max(300, 'La descripción no puede superar las 3 líneas'),
  skillLevel: z.enum(['básico', 'intermedio'], {
    errorMap: () => ({ message: 'Seleccioná un nivel' }),
  }),
  platform: z.enum(['appsheet', 'powerapps']),
  language: z
    .string()
    .min(1, 'El idioma del curso es obligatorio')
    .max(50, 'El idioma no puede superar los 50 caracteres'),
  sector: z
    .string()
    .min(1, 'El sector del curso es obligatorio')
    .max(50, 'El sector no puede superar los 50 caracteres'),
  contentPillar: z
    .string()
    .min(1, 'Definí el contenido de tu curso')
    .max(100, 'El contenido no puede superar los 100 caracteres'),
  toolsAndPlatforms: z
    .string()
    .min(1, 'Seleccioná herramientas y plataformas')
    .max(100, 'El campo no puede superar los 100 caracteres'),
  functionalities: z
    .string()
    .min(1, 'Seleccioná herramientas y plataformas')
    .max(100, 'El campo no puede superar los 100 caracteres'),
  labels: z
    .string()
    .min(1, 'Seleccioná herramientas y plataformas')
    .max(100, 'El campo no puede superar los 100 caracteres'),
});

export type InformacionGeneralSchema = z.infer<typeof informacionGeneralSchema>;

export type InformacionGeneralInputFields = Pick<
  InformacionGeneralSchema,
  'title' | 'labels'
>;

export type InformacionGeneralSelecFields = Pick<
  InformacionGeneralSchema,
  | 'language'
  | 'contentPillar'
  | 'functionalities'
  | 'sector'
  | 'toolsAndPlatforms'
>;

export type InformacionGeneralRichTextFields = Pick<
  InformacionGeneralSchema,
  'description'
>;

export type InformacionGeneralRadioFields = Pick<
  InformacionGeneralSchema,
  'skillLevel' | 'contentType' | 'creationType' | 'platform'
>;
