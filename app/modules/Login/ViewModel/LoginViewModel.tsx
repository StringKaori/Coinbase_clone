import { StringOrUndefinedSetter, BooleanSetter, BooleanOrUndefinedSetter } from "@common/types/SetStateType";

interface LoginViewModel {
    email: string | undefined,
    setEmail: StringOrUndefinedSetter,
    password: string | undefined,
    setPassword: StringOrUndefinedSetter,
    isSecureText: boolean,
    setIsSecureText: BooleanSetter,

    emptyFields: boolean | undefined, 
    setEmptyFields: BooleanOrUndefinedSetter,
    invalidEmail: boolean | undefined,
    setInvalidEmail: BooleanOrUndefinedSetter

    navigateToForgetPassword: () => void,
    navigateToRegisterScreen: () => void,

    handleLoginPress: () => void
}

export { LoginViewModel }