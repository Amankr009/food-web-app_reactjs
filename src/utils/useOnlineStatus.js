import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online",() => {
            setInternetStatus(true);
        })

        window.addEventListener("offline",() => {
            setInternetStatus(false);
        })
    },[])

    return internetStatus;
}

export default useOnlineStatus;