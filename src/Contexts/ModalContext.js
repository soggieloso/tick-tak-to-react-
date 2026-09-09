import { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../Components/Modal/ModalTemplate";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      {children}
      <ModalTemplate /> {}
    </ModalContext.Provider>
  );
}
