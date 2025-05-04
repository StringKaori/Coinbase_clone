import { create } from 'zustand';

interface AccountTotalState {
    accountTotal: number,
    setAccountTotal: (accountTotal: number) => void
}

const useAccountTotalStore = create<AccountTotalState>((set) => ({
    accountTotal: 0,
    setAccountTotal: (accountTotal: number) => {set({accountTotal: accountTotal})}
}));

export { useAccountTotalStore };