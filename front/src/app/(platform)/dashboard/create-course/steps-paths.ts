const BASE_PATH = '/dashboard/create-course/';

export const FORM_STEPS_PATHS = {
  '1': BASE_PATH + 'informacion-general',
  '2': BASE_PATH + 'detalles',
  '3': BASE_PATH + 'modulos-y-lecciones',
  '4': BASE_PATH + 'promociones',
};

export const TABS = [
  {
    value: 'Información general',
    path: FORM_STEPS_PATHS[1],
  },
  {
    value: 'Detalles del curso',
    path: FORM_STEPS_PATHS[2],
  },
  {
    value: 'Módulos y lecciones',
    path: FORM_STEPS_PATHS[3],
  },
  {
    value: 'Promociones',
    path: FORM_STEPS_PATHS[4],
  },
];
