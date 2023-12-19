import React from "react";
import cx from "classnames"
import './Button.scss';
import PropTypes from 'prop-types'

const Button = (props) => {
  const {type = "button", classNames='', boxView, underlineView, children, deleteProduct, click=() => {}, ...restProps} = props
  ///...restProps == {.......}
  return (
    <button onClick={click} className={cx("button", classNames, {"_box":boxView}, {"_box-underline":underlineView})} type={type} {...restProps} deleteproduct={deleteProduct}>{children}</button>
  )
}

export default Button