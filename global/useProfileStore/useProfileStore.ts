import { create } from 'zustand';

interface ProfileState {
    username: string,
    setUsername: (username: string) => void,
}

const useProfileStore = create<ProfileState>((set) => ({
    username: "Bosun Jonesss",
    setUsername: (username: string) => {set({username: username})},
}));

export { useProfileStore };