import { createContext } from "react";
import { useModal } from "../hooks/useModal";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const modalData = useModal();

  return (
    <ModalContext.Provider value={modalData}>
      {children}
      {/* ModalTemplate is now consumed as a regular component elsewhere */}
    </ModalContext.Provider>
  );
}
