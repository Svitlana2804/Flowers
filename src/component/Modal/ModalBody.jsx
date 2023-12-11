import PropTypes from 'prop-types'

const ModalBody = ({ children }) => {
    return(
        <div className="modal-content">{children}</div>
    )
}

ModalBody.propTypes = {
    children:PropTypes.any
}

export default ModalBody