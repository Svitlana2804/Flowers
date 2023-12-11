import cx from "classnames"
import PropTypes from 'prop-types'

const Modal = ({children, className})=>{
    const isActive = true || true && false && (true ||false)
    return(
        <div className={cx("modal", className,{'active':isActive})}>
            <div className={cx("modal-box", className)}>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.any,
    className:PropTypes.string
    
}


export default Modal