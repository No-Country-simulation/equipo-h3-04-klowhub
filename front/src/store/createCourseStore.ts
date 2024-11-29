import { DetallesSchema } from '@/components/forms/createCourse/schemas/detalles';
import { ModulosSchema } from '@/components/forms/createCourse/schemas/modulos-y-lecciones';
import { PromocionesSchema } from '@/components/forms/createCourse/schemas/promociones';
import { GeneralInformationSchema } from '@/components/forms/createProfile/schemas/general-information';
import { create } from 'zustand';

interface CreateCourseStore {
  generalInformation: GeneralInformationSchema | null;
  modulesAndLessons: ModulosSchema | null;
  promotion: PromocionesSchema | null;
  details: DetallesSchema | null;
}

interface CreateCourseActions {
  setGeneralInformation: (data: GeneralInformationSchema) => void;
  setModulesAndLessons: (data: ModulosSchema) => void;
  setPromotion: (data: PromocionesSchema) => void;
  setDetails: (data: DetallesSchema) => void;
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
}));
