import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import cn from 'classnames'
import "../TextArea/TextArea.scss"

const TextAreaBox = (props) => {

	const {
		className,
		label,
		name,
		rows,
		placeholder,
		error,
		...restProps
	} = props
	return (
		<label className={cn('form-item', className, {'has-validation': error})}>
			<p className="form-label">{label}</p>
			<Field as="textarea" className="form-control" name={name} rows={rows}
			       placeholder={placeholder} {...restProps} />
			<ErrorMessage className="error-message" name={name} component='p'/>
		</label>
	)
}
TextAreaBox.defaultProps = {
	rows: 3
}

TextAreaBox.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.object,
	rows: PropTypes.number
}

export default TextAreaBox

 