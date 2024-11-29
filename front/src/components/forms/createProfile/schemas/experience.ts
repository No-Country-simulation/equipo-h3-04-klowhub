import { HERRAMIENTAS_Y_PLATAFORMAS, SECTOR } from '@/constants/filters';
import { z } from 'zod';

export const experienceSchema = z.object({
  sector: z.enum(SECTOR, {
    errorMap: () => ({ message: 'Debe seleccionar un sector válido.' }),
  }),
  sectorExperience: z
    .string()
    .max(300, {
      message:
        'La descripción de la experiencia del sector debe tener un máximo de 300 caracteres.',
    })
    .min(3, {
      message: 'La descripción de la experiencia del sector es obligatoria.',
    }),
  tools: z.enum(HERRAMIENTAS_Y_PLATAFORMAS, {
    errorMap: () => ({ message: 'Debe seleccionar una herramienta válida.' }),
  }),
  toolsExperience: z
    .string()
    .max(300, {
      message:
        'La descripción de la experiencia con herramientas debe tener un máximo de 300 caracteres.',
    })
    .min(2, {
      message:
        'La descripción de la experiencia con herramientas es obligatoria.',
    }),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

export type ExperienceRichTextFields = Pick<
  ExperienceSchema,
  'sectorExperience' | 'toolsExperience'
>;

export type ExperienceSelectFields = Pick<ExperienceSchema, 'sector' | 'tools'>;
