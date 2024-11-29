import { create } from 'zustand';

// Create Profile schemas
import { EducationSchema } from '@/components/forms/createProfile/schemas/education';
import { ExperienceSchema } from '@/components/forms/createProfile/schemas/experience';
import { GeneralInformationSchema } from '@/components/forms/createProfile/schemas/general-information';

interface CreateMentorProfileStore {
  generalInformation: GeneralInformationSchema | null;
  experience: ExperienceSchema | null;
  education: EducationSchema | null;
}

interface CreateMentorProfileActions {
  setGeneralInformation: (data: GeneralInformationSchema) => void;
  setExperience: (data: ExperienceSchema) => void;
  setEducation: (data: EducationSchema) => void;
  resetFields: () => void;
}

type Store = CreateMentorProfileStore & CreateMentorProfileActions;

export const useCreateProfileStore = create<Store>((set) => ({
  generalInformation: null,
  education: null,
  experience: null,
  setGeneralInformation(data) {
    set({ generalInformation: data });
  },
  setEducation(data) {
    set({ education: data });
  },
  setExperience(data) {
    set({ experience: data });
  },
  resetFields() {
    set({
      generalInformation: null,
      experience: null,
      education: null,
    });
  },
}));
