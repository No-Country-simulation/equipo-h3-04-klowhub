import { HERRAMIENTAS_Y_PLATAFORMAS, SECTOR } from '@/constants/filters';
import { z } from 'zod';

export const experienceSchema = z.object({
  sector: z.enum(SECTOR),
  sectorExperience: z.string(),
  tools: z.enum(HERRAMIENTAS_Y_PLATAFORMAS),
  toolsExperience: z.string(),
});

export type ExperienceSchema = z.infer<typeof experienceSchema>;

export type ExperienceRichTextFields = Pick<
  ExperienceSchema,
  'sectorExperience' | 'toolsExperience'
>;

export type ExperienceSelectFields = Pick<ExperienceSchema, 'sector' | 'tools'>;
