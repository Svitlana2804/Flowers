import PropTypes from 'prop-types'

const ModalHeader = ({ children }) => {
    return(
        <div className="modal-header">{children}</div>
    )
}
ModalHeader.propTypes = {
    children:PropTypes.any
}
export default ModalHeader