import { useState, useEffect } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {

    const handleOnline = () => {
        console.log("Back Online");
      setOnlineStatus(true);
    };

    const handleOffline = () => {
        console.log("Back Offline");
      setOnlineStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
