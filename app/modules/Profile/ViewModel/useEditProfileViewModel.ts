import { useMainHeaderStore, useProfileStore } from "global";
import { EditProfileViewModel } from "./EditProfileViewModel";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const useEditProfileViewModel = (): EditProfileViewModel => {
    const { setIsMainHeaderVisible } = useMainHeaderStore();
    const { firstName, setFirstName, lastName, setLastName, phoneNumber, setPhoneNumber } = useProfileStore();

    const [newName, setNewName] = useState<string>(firstName);
    const [newLastName, setNewLastName] = useState<string>(lastName);
    const [newPhoneNumber, setNewPhoneNumber] = useState<string>(phoneNumber);
    const [currentPassword, setCurrentPassword] = useState<string>();
    const [newPassword, setNewPassword] = useState<string>();
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>();

    const [emptyAccountInfoFields, setEmptyAccountInfoFields] = useState<boolean>(false);
    const [emptyPasswordInfoFields, setEmptyPasswordInfoFields] = useState<boolean>(false);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
    const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
        
    const resetStates = () => {
        setNewName(firstName);
        setNewLastName(lastName);
        setNewPhoneNumber(phoneNumber);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");

        setEmptyAccountInfoFields(false);
        setEmptyPasswordInfoFields(false);
        setPasswordsMatch(true);
    }
    // TODO: - mergear os dois header em 1 pra n ter q ficar escondendo dessa forma ruim
    useFocusEffect(
        useCallback(() => {
            setIsMainHeaderVisible(true);

            resetStates()
        }, [firstName, lastName, phoneNumber])
    );

    useEffect(() => {
        const validateIfPasswordsMatch = () => {
            if (!newPassword || !confirmNewPassword) {
                return;
            }
            setPasswordsMatch(newPassword === confirmNewPassword);
        }

        validateIfPasswordsMatch()
    }, [newPassword, confirmNewPassword])

    const handleSaveAndContinuePress = () => {
        setEmptyAccountInfoFields(false);
        setEmptyPasswordInfoFields(false);

        if(!newName || !newLastName || !newPhoneNumber) {
            setEmptyAccountInfoFields(true);
            return;
        }

        const hasTypedInAnyPasswordField = currentPassword || newPassword || confirmNewPassword
        const anyPasswordFieldIsEmpty = !currentPassword || !newPassword || !confirmNewPassword

        if(hasTypedInAnyPasswordField && anyPasswordFieldIsEmpty) {
            setEmptyPasswordInfoFields(true);
            return;
        }

        if(!passwordsMatch){ return; }

        setFirstName(newName);
        setLastName(newLastName);
        setPhoneNumber(newPhoneNumber);
        setShouldShowModal(true);
    }

    const handleModalClose = () => {
        setShouldShowModal(false);
    }

    return {
        newName,
        setNewName,
        newLastName,
        setNewLastName,
        newPhoneNumber,
        setNewPhoneNumber,
        currentPassword,
        setCurrentPassword,
        newPassword,
        setNewPassword,
        confirmNewPassword,
        setConfirmNewPassword,
        emptyAccountInfoFields,
        setEmptyAccountInfoFields,
        emptyPasswordInfoFields, 
        setEmptyPasswordInfoFields,
        passwordsMatch,
        setPasswordsMatch,
        shouldShowModal, 
        setShouldShowModal,

        handleSaveAndContinuePress,
        handleModalClose
    }
}

export { useEditProfileViewModel };