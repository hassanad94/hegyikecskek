import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [currentDevice, setCurrentDevice] = useState("base");

  const handleWindowSizeChange = () => {
    const currentWindowSize = window.innerWidth;

    if (currentWindowSize >= 850) {
      setCurrentDevice("tablet");
    }
    if (currentWindowSize < 850) {
      setCurrentDevice("mobile");
    }
    if (currentWindowSize >= 1024) {
      setCurrentDevice("desktop");
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [currentDevice]);

  return (
    <Context.Provider
      value={{
        currentDevice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
