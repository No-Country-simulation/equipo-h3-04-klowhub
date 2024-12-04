import {
  FUNCIONALIDADES,
  HERRAMIENTAS_Y_PLATAFORMAS,
  LENGUAJES,
  NIVEL,
  PILAR_DE_CONTENIDO,
  PLATAFORMA,
  SECTOR,
  TIPO_CONTENIDO,
} from '@/constants/filters';

export type FiltersFields = {
  toolsAndPlatforms: (typeof HERRAMIENTAS_Y_PLATAFORMAS)[];
  contentPillar: (typeof PILAR_DE_CONTENIDO)[];
  functionalities: (typeof FUNCIONALIDADES)[];
  contentType: (typeof TIPO_CONTENIDO)[];
  platforms: (typeof PLATAFORMA)[];
  languages: (typeof LENGUAJES)[];
  sectors: (typeof SECTOR)[];
  level: (typeof NIVEL)[];
};
