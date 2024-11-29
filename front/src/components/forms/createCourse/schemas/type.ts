import { DetallesRichTextFields } from './detalles';
import {
  InformacionGeneralInputFields,
  InformacionGeneralRadioFields,
  InformacionGeneralRichTextFields,
  InformacionGeneralSelecFields,
} from './informacion-general';
import {
  ModulosInputFields,
  ModulosRichTextFields,
} from './modulos-y-lecciones';
import { PromocionesRadioFields } from './promociones';

export type CreateCourseInputFields = InformacionGeneralInputFields &
  ModulosInputFields;

export type CreateCourseRadioFields = InformacionGeneralRadioFields &
  PromocionesRadioFields;

export type CreateCourseRichTextFields = DetallesRichTextFields &
  InformacionGeneralRichTextFields &
  ModulosRichTextFields;

export type CreateCourseSelectFields = InformacionGeneralSelecFields;
