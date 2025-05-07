import { StringSetter } from "@common/types/SetStateType";

interface ProfileViewModel {
    totalBalance: string, 
    setTotalBalance: StringSetter,

    handleEditProfilePress: () => void
}

export { ProfileViewModel };