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
import { create } from 'zustand';

export type FiltersState = {
  toolsAndPlatforms: (typeof HERRAMIENTAS_Y_PLATAFORMAS)[];
  contentPillar: (typeof PILAR_DE_CONTENIDO)[];
  functionalities: (typeof FUNCIONALIDADES)[];
  contentType: (typeof TIPO_CONTENIDO)[];
  platforms: (typeof PLATAFORMA)[];
  languages: (typeof LENGUAJES)[];
  sectors: (typeof SECTOR)[];
  level: (typeof NIVEL)[];
};

type FiltersAction = {
  resetFilter: (key: keyof FiltersState) => void;
  addFilter: (key: keyof FiltersState, value: string) => void;
};

type FiltersStore = FiltersState & FiltersAction;

export const useFiltersStore = create<FiltersStore>((set) => ({
  toolsAndPlatforms: [],
  functionalities: [],
  contentPillar: [],
  contentType: [],
  platforms: [],
  languages: [],
  sectors: [],
  level: [],
  resetFilter(key) {
    set((prevState) => ({
      ...prevState,
      [key]: [],
    }));
  },
  addFilter(key, value) {
    set((prevState) => {
      const currentFilters = prevState[key];
      // @ts-ignore
      const updatedFilters = currentFilters.includes(value)
        ? // @ts-ignore
          currentFilters.filter((item) => item !== value) // Agregar filtro si no estaba
        : [...currentFilters, value]; // Removerlo si ya estaba

      console.log(`Updated filters for ${key}:`, updatedFilters);
      return {
        ...prevState,
        [key]: updatedFilters,
      };
    });
  },
}));
