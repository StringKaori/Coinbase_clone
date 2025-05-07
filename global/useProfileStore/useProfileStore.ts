import { create } from 'zustand';

type TransactionStatus = "Successful" | "Failed" | "In Progress"
type TransactionType = "crypto" | "gift"

type RecentTransactions = {
    type: TransactionType,
    title: string,
    convertedValue: number,
    date: Date,
    status: TransactionStatus,
    iconColorsGradient: [string, string, ...string[]]
}

interface ProfileState {
    username: string,
    setUsername: (username: string) => void,
    recentTransactions: RecentTransactions[],
    setRecentTransactions: (recentTransaction: RecentTransactions) => void
}

const useProfileStore = create<ProfileState>((set) => ({
    username: "Bosun Jonesss",
    setUsername: (username: string) => {set({username: username})},
    recentTransactions: [
        {
            type: "gift",
            title: "App Store & iTunes Gift Card",
            convertedValue: 0,
            date: new Date(),
            status: "Failed",
            iconColorsGradient: ["#00E0FF", "#0047FF"]
        },
        {
            type: "crypto",
            title: "Bitcoin Currency",
            convertedValue: 0,
            date: new Date(),
            status: "In Progress",
            iconColorsGradient: ["#FF8000", "#E34141"]
        },
    ],
    setRecentTransactions: (recentTransaction: RecentTransactions) => 
        set((state) => ({
            recentTransactions: [recentTransaction, ...state.recentTransactions]
        }))
}));

export { useProfileStore, TransactionType, TransactionStatus };