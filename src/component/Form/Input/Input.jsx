import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik'; 
import cn from 'classnames'
 import '../Input/Input.scss'
const InputBox = (props) => {
    const { 
        className,
        label,
        type,
        name,
        placeholder,
        error,
        errorMessage,
        ...restProps
    } = props
    return (
        <label className={cn('form-item', className, {'has-validation': error})}>
			<p className="form-label">{label}</p>
            <Field type={type} className="form-control" name={name} placeholder={placeholder} {...restProps} />
			<ErrorMessage className="error-message" name={name} component='p'/>
		</label>
    )
}

InputBox.defaultProps = {
    type: "text",
    
}
InputBox.PropTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.object
}
export default InputBox