import { z } from 'zod';

export const promocionesSchema = z
  .object({
    hasDiscount: z.enum(['si', 'no'], {
      errorMap: () => ({ message: 'Seleccione una de las opciones' }),
    }),
    discountPercentage: z.coerce.number().min(1).max(100).optional(),
    discountProductId: z.coerce.string(),
    discountTypeProduct: z.enum(['application', 'course']).optional(),
  })
  .refine(
    (schema) => {
      if (schema.hasDiscount === 'no') {
        return true;
      }

      // Valida que si se selecciono descuento, que haya un producto
      if (!schema.discountProductId) {
        return false;
      }

      return true;
    },
    {
      message: 'Agregar un producto en descuento',
      path: ['discountProductId'],
    },
  );

// export const promocionesSchema = z.discriminatedUnion('hasDiscount', [
//   z.object({
//     hasDiscount: z.literal('si'),
//     discountPercentage: z.coerce.number().min(1).max(100),
//     discountProductId: z.string(),
//     discountTypeProduct: z.enum(['application', 'course']),
//   }),
//   z.object({ hasDiscount: z.literal('no') }),
// ]);

export type PromocionesSchema = z.infer<typeof promocionesSchema>;
export type PromocionesRadioFields = Pick<PromocionesSchema, 'hasDiscount'>;
