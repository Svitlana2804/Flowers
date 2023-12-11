import './Modal.scss'
import PropTypes from 'prop-types'


const ModalWrapper = ({ children, onClose }) => {
  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      // Клік відбувся саме на контейнері ModalWrapper 
      onClose();
    }
  };

  return (
    <div className="modal-wrapper" onClick={handleWrapperClick}>
      {children}
    </div>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func.isRequired
}

export default ModalWrapper;



