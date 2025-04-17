import { StringOrUndefinedSetter, BooleanSetter, StringSetter, NumberSetter } from "@common/types/SetStateType"

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
    isConfirmPasswordSecureText: boolean | undefined,
    setIsConfirmPasswordSecureText: BooleanSetter,

    progress: number,
    setProgress: NumberSetter,

    passwordsMatch: boolean | undefined,
    setPasswordsMatch: BooleanSetter,
}

export { RegisterViewModel }