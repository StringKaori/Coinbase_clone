import { StringOrUndefinedSetter, BooleanSetter, StringSetter, NumberSetter, BooleanOrUndefinedSetter } from "@common/types/SetStateType"

interface RegisterViewModel {
    name: string | undefined,
    setName: StringOrUndefinedSetter

    email: string | undefined,
    setEmail: StringOrUndefinedSetter,

    password: string | undefined,
    setPassword: StringOrUndefinedSetter,
    isPasswordSecureText: boolean | undefined,
    setIsPasswordSecureText: BooleanSetter

    confirmPassword: string | undefined,
    setConfirmPassword: StringOrUndefinedSetter,
    isConfirmPasswordSecureText: boolean,
    setIsConfirmPasswordSecureText: BooleanSetter,

    progress: number,
    setProgress: NumberSetter,

    passwordsMatch: boolean,
    setPasswordsMatch: BooleanSetter,

    emptyFields: boolean | undefined,
    setEmptyFields: BooleanOrUndefinedSetter,

    invalidEmail: boolean | undefined,
    setInvalidEmail: BooleanOrUndefinedSetter,

    registrationHandler: () => void
}

export { RegisterViewModel }