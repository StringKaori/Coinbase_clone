import { formatBalance } from "@common/helpers/formatBalance";
import { TransactionStatus, useAccountTotalStore } from "global";
import { useEffect, useState } from "react";
import { ProfileViewModel } from "./ProfileViewModel";

const useProfileViewModel = (): ProfileViewModel => {
    const { accountTotal } = useAccountTotalStore();
    const [totalBalance, setTotalBalance] = useState<string>(formatBalance(accountTotal));

    // useEffect(() => {
    //     setBalance(formatBalance(accountTotal))
    // }, [])

    const formattedDate = (date: Date): string => {
        return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        });
    };

    const getStatusColor = (status: TransactionStatus): string => {
        return status === "Successful" ? "#0FE133" :
            status === "Failed" ? "#EB3232" : "#979797"
    }

    return {
        totalBalance, 
        setTotalBalance,
        getStatusColor,
        formatBalance,
        formattedDate
    }
}

export { useProfileViewModel };