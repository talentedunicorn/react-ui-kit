import React from "react"
import ReactDOM from "react-dom"
import ButtonStyles from "./button.module.css"

import PropTypes from "prop-types"

const buttonTypes = ['hollow']

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
    style={props.style}
    className={style} 
    disabled={props.disabled}
    onClick={(e) => props.handleClick(e)}>{ props.children }</button>
}

Button.propTypes = {
  type: PropTypes.oneOf(buttonTypes),
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object
}
export default Button
