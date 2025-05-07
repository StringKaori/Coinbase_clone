import { StringSetter } from "@common/types/SetStateType";
import { TransactionStatus } from "global";

interface ProfileViewModel {
    totalBalance: string, 
    setTotalBalance: StringSetter,

    handleEditProfilePress: () => void
}

export { ProfileViewModel };