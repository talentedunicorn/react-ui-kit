import React from "react"
import ReactDOM from "react-dom"
import ButtonStyles from "./button.module.css"

import PropTypes from "prop-types"

const buttonTypes = ['hollow', 'error']

const Button = props =>  {

  let style = ButtonStyles.default

  switch(props.type) {
    case 'hollow':
      style = ButtonStyles.hollow
      break
    default:
      break
  }

  return <button 
    className={style} 
    disabled={props.disabled}
    onClick={() => props.handleClick()}>{ props.children }</button>
}

Button.propTypes = {
  type: PropTypes.oneOf(buttonTypes),
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
}
export default Button
