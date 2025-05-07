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

interface TransactionsState {
    recentTransactions: RecentTransactions[],
    setRecentTransactions: (recentTransaction: RecentTransactions) => void,

    totalTransactionsNumber: number,
    incrementTotalTransactionsNumber: () => void,

    failedTransactionsCount: number,
    incrementFailedTransactionsCount: () => void,

    successfulTransactionsCount: number,
    incrementSuccessfulTransactionsCount: () => void,

    inProgressTransactionsCount: number,
    incrementInProgressTransactionsCount: () => void,
}

const useTransactionsStore = create<TransactionsState>((set) => ({
    recentTransactions: [
        {
            type: "gift",
            title: "App Store & iTunes Gift Card",
            convertedValue: 500.00,
            date: new Date(),
            status: "Failed",
            iconColorsGradient: ["#00E0FF", "#0047FF"]
        },
        {
            type: "crypto",
            title: "Bitcoin Currency",
            convertedValue: 440.00,
            date: new Date(),
            status: "In Progress",
            iconColorsGradient: ["#FF8000", "#E34141"]
        },
    ],
    setRecentTransactions: (recentTransaction: RecentTransactions) => 
        set((state) => ({
            recentTransactions: [recentTransaction, ...state.recentTransactions]
        })),

    totalTransactionsNumber: 2,
    incrementTotalTransactionsNumber: () => 
        set((state) => ({
            totalTransactionsNumber: state.totalTransactionsNumber + 1
        })),

    failedTransactionsCount: 1,
    incrementFailedTransactionsCount: () => 
        set((state) => ({
            failedTransactionsCount: state.failedTransactionsCount + 1
        })),

    successfulTransactionsCount: 0,
    incrementSuccessfulTransactionsCount: () => 
        set((state) => ({
            successfulTransactionsCount: state.successfulTransactionsCount + 1
        })),

    inProgressTransactionsCount: 1,
    incrementInProgressTransactionsCount: () => 
        set((state) => ({
            inProgressTransactionsCount: state.inProgressTransactionsCount + 1
        })),   
}));

export { useTransactionsStore, TransactionType, TransactionStatus };