import { LENGUAJES, PLATAFORMA } from '@/constants/filters';
import { z } from 'zod';

export const generalInformationSchema = z.object({
  area: z
    .string({
      required_error: 'El campo "Área" es obligatorio.',
      invalid_type_error: 'El campo "Área" debe ser un texto válido.',
    })
    .min(1),
  pricePerHour: z.coerce
    .number({
      invalid_type_error: 'El precio por hora debe ser un número.',
    })
    .min(1, 'El precio por hora debe ser al menos 1.'),
  expertiseLevel: z.enum(['junior', 'mid-level', 'senior'], {
    invalid_type_error: 'El nivel de experiencia no es válido.',
    required_error: 'El nivel de experiencia es obligatorio.',
  }),
  platform: z.enum(PLATAFORMA, {
    invalid_type_error: 'La plataforma seleccionada no es válida.',
    required_error: 'La plataforma es obligatoria.',
  }),
  languague: z.enum(LENGUAJES, {
    invalid_type_error: 'El idioma seleccionado no es válido.',
    required_error: 'El idioma es obligatorio.',
  }),
  // pilar: z.enum(PILAR_DE_CONTENIDO, {
  //   invalid_type_error: 'El pilar seleccionado no es válido.',
  //   required_error: 'El pilar es obligatorio.',
  // }),
});

export type GeneralInformationSchema = z.infer<typeof generalInformationSchema>;

export type GeneralInformationInputFields = Pick<
  GeneralInformationSchema,
  'area' | 'pricePerHour'
>;

export type GeneralInformationRadioFields = Pick<
  GeneralInformationSchema,
  'platform' | 'expertiseLevel'
>;

export type GeneralInformatioSelectFields = Pick<
  GeneralInformationSchema,
  'languague' | 'area'
>;
