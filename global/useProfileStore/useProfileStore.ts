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
            title: "Amazon giftcard",
            convertedValue: 150.00,
            date: new Date(),
            status: "Successful",
            iconColorsGradient: ["#ff0000", "#00ff00"]
        },
        {
            type: "gift",
            title: "Steam giftcard",
            convertedValue: 75.50,
            date: new Date(),
            status: "In Progress",
            iconColorsGradient: ["#f39c12", "#d35400"]
        },
        {
            type: "crypto",
            title: "Bitcoin",
            convertedValue: 320.25,
            date: new Date(),
            status: "Failed",
            iconColorsGradient: ["#8e44ad", "#3498db"]
        },
    ],
    setRecentTransactions: (recentTransaction: RecentTransactions) => 
        set((state) => ({
            recentTransactions: [...state.recentTransactions, recentTransaction]
        }))
}));

export { useProfileStore };