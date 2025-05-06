import { create } from 'zustand';

interface MainHeaderState {
    isMainHeaderVisible: boolean,
    setIsMainHeaderVisible: (isMainHeaderVisible: boolean) => void
}

const useMainHeaderStore = create<MainHeaderState>((set) => ({
    isMainHeaderVisible: true,
    setIsMainHeaderVisible: (isMainHeaderVisible: boolean) => {set({isMainHeaderVisible: isMainHeaderVisible})}
}));

export { useMainHeaderStore };