import { create } from "zustand";

export type User = {
  name: string;
  email: string;
  avatar_url: string;
  description: string;
  id: string;
  count: number;
  language: string;

} | null | undefined;
interface UserStore {
  user: User ;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
