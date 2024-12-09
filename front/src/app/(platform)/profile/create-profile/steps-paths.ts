const BASE_PATH = '/profile/create-profile/';

export const FORM_STEPS_PATHS = {
  '1': BASE_PATH + 'general-information',
  '2': BASE_PATH + 'experience',
  '3': BASE_PATH + 'education',
};

export const TABS = [
  {
    value: 'Información general',
    path: FORM_STEPS_PATHS[1],
  },
  {
    value: 'experiencia',
    path: FORM_STEPS_PATHS[2],
  },
  {
    value: 'educacion',
    path: FORM_STEPS_PATHS[3],
  },
];
