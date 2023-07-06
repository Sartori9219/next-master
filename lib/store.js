import { create } from 'zustand';

export const useHandleMenuStore = create((set, get) => ({
  sidebar: false,
  userMenu: false,
  // handleSidebar: () => console.log("zustand function")
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  toggleUserMenu: () => set((state) => ({ userMenu: !state.userMenu }))
}));
