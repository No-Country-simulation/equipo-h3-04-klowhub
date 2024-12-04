import { create } from 'zustand';

// Create Course schemas
import { DetallesSchema } from '@/components/forms/createCourse/schemas/detalles';
import { InformacionGeneralSchema } from '@/components/forms/createCourse/schemas/informacion-general';
import { ModulosSchema } from '@/components/forms/createCourse/schemas/modulos-y-lecciones';
import { PromocionesSchema } from '@/components/forms/createCourse/schemas/promociones';

interface CreateCourseStore {
  generalInformation: InformacionGeneralSchema | null;
  modulesAndLessons: ModulosSchema | null;
  promotion: PromocionesSchema | null;
  details: DetallesSchema | null;
}

interface CreateCourseActions {
  setGeneralInformation: (data: InformacionGeneralSchema) => void;
  setModulesAndLessons: (data: ModulosSchema) => void;
  setPromotion: (data: PromocionesSchema) => void;
  setDetails: (data: DetallesSchema) => void;
  resetFieds: () => void;
}

type Store = CreateCourseStore & CreateCourseActions;

export const useCreateCourseStore = create<Store>((set) => ({
  generalInformation: null,
  modulesAndLessons: null,
  promotion: null,
  details: null,
  setGeneralInformation(data) {
    set({ generalInformation: data });
  },
  setDetails(data) {
    set({ details: data });
  },
  setModulesAndLessons(data) {
    set({ modulesAndLessons: data });
  },
  setPromotion(data) {
    set({ promotion: data });
  },
  resetFieds() {
    set({
      generalInformation: null,
      details: null,
      modulesAndLessons: null,
      promotion: null,
    });
  },
}));
