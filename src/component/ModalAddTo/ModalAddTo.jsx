import ModalWrapper from "../Modal/ModalWrapper"
import Modal from "../Modal/Modal"
import ModalHeader from "../Modal/ModalHeader"
import ModalBody from "../Modal/ModalBody"
import ModalFooter from "../Modal/ModalFooter"
import ModalClose from "../Modal/ModalClose"
import PropTypes from 'prop-types'

const ModalAddTo= ({title, desc, handleOk, handleClose}) =>{
    return(
        <ModalWrapper onClose={handleClose}>
            <Modal>
                <ModalClose click={handleClose}/>
                <ModalHeader>
                
                </ModalHeader>
                <ModalBody>
                    <div><i>{title}</i></div>
                    <p>{desc}</p>
                </ModalBody>
                <ModalFooter textFirst="Додати до кошика "  clickFirst={handleOk} />
            </Modal>
        </ModalWrapper>
    )
}
ModalAddTo.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    handleOk: PropTypes.func,
    handleClose: PropTypes.func,
}
export default ModalAddTo