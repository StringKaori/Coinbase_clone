import { BooleanOrUndefinedSetter, BooleanSetter, StringOrUndefinedSetter } from "@common/types/SetStateType"

interface ForgetPasswordViewModel {
    email: string | undefined,
    setEmail: StringOrUndefinedSetter,

    isModalVisible: boolean,
    setIsModalVisible: BooleanSetter,

    emptyField: boolean,
    setEmptyField: BooleanSetter,

    invalidEmail: boolean | undefined,
    setInvalidEmail: BooleanOrUndefinedSetter,

    handlePress: () => void,
    onClose: () => void
}

export { ForgetPasswordViewModel }