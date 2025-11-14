import React, { useContext } from 'react'
import ReactDom from "react-dom";
import { ModalBackdrop, ModalContainer } from './Modal.styled';
import {ModalContext} from "../../Contexts/ModalContext"

function ModalTemplate() {
    const {handleModal, modalContent, modal} = useContext(ModalContext)

    if(modal) {
 return ReactDom.createPortal(
 <ModalBackdrop>
    <ModalContainer>{modalContent}</ModalContainer>
    </ModalBackdrop>,
  document.getElementById("modal-root"));
    }
 return null;
}

export default ModalTemplate
