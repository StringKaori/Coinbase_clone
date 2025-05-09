import { create } from 'zustand';

interface ProfileState {
    firstName: string,
    setFirstName: (firstName: string) => void,

    lastName: string,
    setLastName: (lastName: string) => void,

    phoneNumber: string,
    setPhoneNumber: (phoneNumber: string) => void,

}

const useProfileStore = create<ProfileState>((set) => ({
    firstName: "Bosun Jonesss",
    setFirstName: (firstName: string) => {set({firstName: firstName})},

    lastName: "Tajudeen",
    setLastName: (lastName: string) => {set({lastName: lastName})},

    phoneNumber: "+234 816127162",
    setPhoneNumber: (phoneNumber: string) => {set({phoneNumber: phoneNumber})},

}));

export { useProfileStore };