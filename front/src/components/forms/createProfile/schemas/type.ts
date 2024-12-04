import { EducationRichTextField } from './education';
import { ExperienceRichTextFields, ExperienceSelectFields } from './experience';
import {
  GeneralInformationInputFields,
  GeneralInformationRadioFields,
  GeneralInformatioSelectFields,
} from './general-information';

export type CreateProfileInputFields = GeneralInformationInputFields;

export type CreateProfileRichTextFields = ExperienceRichTextFields &
  EducationRichTextField;

export type CreateProfileRadioFields = GeneralInformationRadioFields;

export type CreateProfileSelectFields = GeneralInformatioSelectFields &
  ExperienceSelectFields;
