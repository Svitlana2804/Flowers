import Button from "../Button/Button"
import PropTypes from 'prop-types'
const ModalFooter = ({textFirst, textSecondary, clickFirst, clickSecondary}) =>{
    return(
        <div className="button-wrapper">
            { textFirst && <Button boxView click={clickFirst}>{textFirst}</Button>  }
            { textSecondary && <Button underlineView click={clickSecondary}>{textSecondary}</Button> }
        </div>
    )
}

ModalFooter.propTypes = {
    textFirst: PropTypes.string,
    textSecondary: PropTypes.string,
    clickFirst: PropTypes.func,
    clickSecondary:PropTypes.func
}
export default ModalFooter