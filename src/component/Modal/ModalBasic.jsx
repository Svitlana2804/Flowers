import ModalWrapper from "./ModalWrapper"
import Modal from "./Modal"
import ModalHeader from "./ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalClose from "./ModalClose"

const ModalBase = ({title, desc, handleOk, handleClose, handleBtn}) =>{
    return(
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                   <ModalClose click={handleBtn}/>
                </ModalHeader>
                <ModalBody>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </ModalBody>
                <ModalFooter textFirst="NO,CANCEL" textSecondary="YES,DELETE" clickFirst={handleOk} clickSecondary={handleClose}/>
            </Modal>
        </ModalWrapper>
    )
}

export default ModalBase