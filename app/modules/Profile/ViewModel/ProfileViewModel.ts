import { BooleanSetter, StringSetter } from "@common/types/SetStateType";

interface ProfileViewModel {
    totalBalance: string, 
    setTotalBalance: StringSetter,
    modalVisible: boolean,
    setModalVisible: BooleanSetter,

    handleEditProfilePress: () => void,
    handleExit: () => void
}

export { ProfileViewModel };