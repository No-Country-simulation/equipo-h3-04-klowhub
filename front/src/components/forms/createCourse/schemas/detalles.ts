import { z } from 'zod';

// Tamaño maximo de la image -> 5 MB
const MAX_SIZE = 5 * 1024 * 1024;

// Tipo valido de archivo
const VALID_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

export const imageValidation = z
  .any()
  .refine(
    (file) => VALID_TYPES.includes(file.type),
    'La imagen debe ser en formato JPEG o PNG',
  )
  .refine(
    (file) => file.size <= MAX_SIZE,
    'La imagen no debe superar los 5 MB',
  );

export const pdfSchema = z
  .any()
  .refine((file) => file.type === 'application/pdf', {
    message: 'File must be a PDF',
  })
  .refine((file) => file.size <= MAX_SIZE, {
    message: 'File size must not exceed 5MB',
  });

export const detallesSchema = z.object({
  learningOutcomes: z
    .string()
    .min(1, 'Por favor, describe qué aprenderán los estudiantes')
    .max(500, 'La descripción no puede exceder los 500 caracteres'),
  prerequisites: z
    .string()
    .min(1, 'Por favor, indica los requisitos previos')
    .max(500, 'La descripción no puede exceder los 500 caracteres'),
  detailedDescription: z
    .string()
    .min(1, 'Por favor, escribe una descripción detallada del contenido')
    .max(500, 'La descripción no puede exceder los 1000 caracteres'),
  coverImage: imageValidation,
});

export type DetallesSchema = z.infer<typeof detallesSchema>;

export type DetallesRichTextFields = Pick<
  DetallesSchema,
  'detailedDescription' | 'learningOutcomes' | 'prerequisites'
>;
