import React from "react"
import ReactDOM from "react-dom"
import ButtonStyles from "./button.module.css"

import PropTypes from "prop-types"

const Button = props => 
  <button className={ButtonStyles.Button} onClick={() => props.handleClick()}>{ props.children }</button>

Button.propTypes = {
  handleClick: PropTypes.func
}
export default Button
