import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  isLoggedIn: boolean;
  hasCompletedOnboarding: boolean;
  hasGrantedPermissions: boolean;
  currentOnboardingStep: number;
  setLoggedIn: (value: boolean) => void;
  setCompletedOnboarding: (value: boolean) => void;
  setGrantedPermissions: (value: boolean) => void;
  setOnboardingStep: (step: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      hasCompletedOnboarding: false,
      hasGrantedPermissions: false,
      currentOnboardingStep: 0,
      setLoggedIn: (value) => set({ isLoggedIn: value }),
      setCompletedOnboarding: (value) => set({ hasCompletedOnboarding: value }),
      setGrantedPermissions: (value) => set({ hasGrantedPermissions: value }),
      setOnboardingStep: (step) => set({ currentOnboardingStep: step }),
    }),
    {
      name: 'ttubeok-storage',
    }
  )
);
