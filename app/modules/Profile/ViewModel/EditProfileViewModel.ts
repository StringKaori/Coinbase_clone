import { BooleanSetter, StringOrUndefinedSetter, StringSetter } from "@common/types/SetStateType"

interface EditProfileViewModel {
    newName: string,
    setNewName: StringSetter,
    newLastName: string,
    setNewLastName: StringSetter,
    newPhoneNumber: string,
    setNewPhoneNumber: StringSetter,
    currentPassword: string | undefined,
    setCurrentPassword: StringOrUndefinedSetter,
    newPassword: string | undefined,
    setNewPassword: StringOrUndefinedSetter,
    confirmNewPassword: string | undefined,
    setConfirmNewPassword: StringOrUndefinedSetter,
    emptyAccountInfoFields: boolean, 
    setEmptyAccountInfoFields: BooleanSetter,
    emptyPasswordInfoFields: boolean,
    setEmptyPasswordInfoFields: BooleanSetter,
    passwordsMatch: boolean,
    setPasswordsMatch: BooleanSetter,

    handleSaveAndContinuePress: () => void
}

export { EditProfileViewModel }