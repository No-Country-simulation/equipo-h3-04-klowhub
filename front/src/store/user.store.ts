import { IUser } from '@/interfaces/user';
import { create } from 'zustand';

interface UserStore {
  user: IUser | null;
}

interface UserStoreActions {
  setUser: (user: IUser) => void;
}

export const useUserStore = create<UserStore & UserStoreActions>((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
}));
