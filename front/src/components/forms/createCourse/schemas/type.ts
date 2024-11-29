import {
  InformacionGeneralInputFields,
  InformacionGeneralRadioFields,
} from './informacion-general';
import { ModulosInputFields } from './modulos-y-lecciones';
import { PromocionesRadioFields } from './promociones';

export type CreateCourseInputFields = InformacionGeneralInputFields &
  ModulosInputFields;

export type CreateCourseRadioFields = InformacionGeneralRadioFields &
  PromocionesRadioFields;
