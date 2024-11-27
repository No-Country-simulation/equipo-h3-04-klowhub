import { z } from 'zod';
import { imageValidation, pdfSchema } from './detalles';

const MAX_COVER_IMAGES = 3;

const leccionSchema = z.object({
  lessionTitle: z
    .string()
    .min(1, 'El título es obligatorio')
    .max(100, 'El título no puede tener más de 100 caracteres'),
  lessonDescription: z
    .string()
    .min(1, 'La descripción es obligatoria')
    .max(300, 'La descripción no puede superar las 3 líneas'),
  lessonCoverImages: z.array(imageValidation).min(1).max(MAX_COVER_IMAGES),
  lessonAditionalResources: z.array(pdfSchema).max(5).optional(),
});

export const modulosSchema = z.object({
  moduleTitle: z
    .string()
    .min(1, 'El título es obligatorio')
    .max(100, 'El título no puede tener más de 100 caracteres'),
  moduleDescription: z
    .string()
    .min(1, 'La descripción es obligatoria')
    .max(300, 'La descripción no puede superar las 3 líneas'),
  lessons: z.array(leccionSchema),
});

export type ModulosSchema = z.infer<typeof modulosSchema>;

export type ModulosInputFields = Pick<ModulosSchema, 'moduleTitle'>;

export type ModulosRichTextFields = Pick<ModulosSchema, 'moduleDescription'>;
