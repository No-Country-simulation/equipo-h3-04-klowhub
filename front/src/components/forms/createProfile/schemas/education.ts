import { z } from 'zod';
import { imageValidation } from '../../createCourse/schemas/detalles';

export const educationSchema = z.object({
  academicEducation: z.string(),
  certifications: z.array(imageValidation),
});

export type EducationSchema = z.infer<typeof educationSchema>;

export type EducationRichTextField = Pick<EducationSchema, 'academicEducation'>;
