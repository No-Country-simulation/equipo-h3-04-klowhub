import { z } from 'zod';
import { imageValidation } from '../../createCourse/schemas/detalles';

export const educationSchema = z.object({
  academicEducation: z
    .string({
      message: 'La descripción de la educacion academica es obligatoria.',
    })
    .max(300, {
      message:
        'La descripción de la educacion academica debe tener un máximo de 300 caracteres.',
    })
    .min(3, {
      message: 'La descripción de la educacion academica es obligatoria.',
    }),
  certifications: z.array(imageValidation),
});

export type EducationSchema = z.infer<typeof educationSchema>;

export type EducationRichTextField = Pick<EducationSchema, 'academicEducation'>;
