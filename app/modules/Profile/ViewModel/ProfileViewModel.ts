import { StringSetter } from "@common/types/SetStateType";
import { TransactionStatus } from "global";

interface ProfileViewModel {
    totalBalance: string, 
    setTotalBalance: StringSetter,

    getStatusColor: (status: TransactionStatus) => string,
    formatBalance: (value: number) => string,
    formattedDate: (date: Date) => string
}

export { ProfileViewModel };