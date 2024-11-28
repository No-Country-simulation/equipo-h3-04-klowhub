import { z } from 'zod';

const productSchema = z.object({
  id: z.string(),
  percentage: z.coerce.number().min(1).max(100),
});

export const promocionesSchema = z
  .object({
    discount: z.enum(['si', 'no'], {
      errorMap: () => ({ message: 'Seleccione una de las opciones' }),
    }),
    discountApplications: z.array(productSchema).optional(),
    discountCourses: z.array(productSchema).optional(),
  })
  .refine(
    (schema) => {
      if (schema.discount === 'no') {
        return true;
      }

      // Valida que si en caso de eligir descuento, haya al menos una aplicacion o curso
      return (
        (schema.discountApplications?.length || 0) +
          (schema.discountCourses?.length || 0) >=
        1
      );
    },
    {
      message: 'Agregar un producto en descuento',
      path: ['discountApplications', 'discountCourses'],
    },
  );

export type PromocionesSchema = z.infer<typeof promocionesSchema>;
export type PromocionesRadioFields = Pick<PromocionesSchema, 'discount'>;
