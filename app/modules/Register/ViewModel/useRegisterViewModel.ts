import { useEffect, useState } from "react";
import { usePasswordStrength } from "./usePasswordStrength";
import { RegisterViewModel } from "../types/RegisterViewModel";

const useRegisterViewModel = (): RegisterViewModel => {
    
    const [name, setName] = useState<string>();

    const [email, setEmail] = useState<string>();

    const [password, setPassword] = useState<string>();
    const [isPasswordSecureText, setIsPasswordSecureText] = useState<boolean>(true);

    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [isConfirmPasswordSecureText, setIsConfirmPasswordSecureText] = useState<boolean>(true);

    const [progress, setProgress] = useState<number>(0);
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    useEffect(() => {
        setProgress(usePasswordStrength(password))
    }, [password])

    useEffect(() => {
        if(!password || !confirmPassword) { return; }
        setPasswordsMatch(password===confirmPassword)
    }, [password, confirmPassword])

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        isPasswordSecureText,
        setIsPasswordSecureText,
        confirmPassword,
        setConfirmPassword,
        isConfirmPasswordSecureText,
        setIsConfirmPasswordSecureText,
        progress,
        setProgress,
        passwordsMatch,
        setPasswordsMatch,
    };
}

export { useRegisterViewModel };