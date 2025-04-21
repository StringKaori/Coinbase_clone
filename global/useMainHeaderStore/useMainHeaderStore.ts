import { create } from 'zustand';

interface MainHeaderState {
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void
}

const useMainHeaderStore = create<MainHeaderState>((set) => ({
    isVisible: true,
    setIsVisible: (isVisible: boolean) => {set({isVisible: isVisible})}
}));

export { useMainHeaderStore };