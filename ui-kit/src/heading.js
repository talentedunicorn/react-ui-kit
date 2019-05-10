import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import HeadingStyles from "./heading.module.css"

const Heading = props => {
  switch(props.level) {
    case 1: 
      return <h1 className={HeadingStyles.H1}>{props.text}</h1>
    case 2:
      return <h2 className={HeadingStyles.H2}>{props.text}</h2>
    case 3:
      return <h3 className={HeadingStyles.H3}>{props.text}</h3>
    case 4:
      return <h4 className={HeadingStyles.H4}>{props.text}</h4>
    case 5:
      return <h5 className={HeadingStyles.H5}>{props.text}</h5>
    default:
      return null
  }
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Heading
