import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import cx from "classnames"

import HeadingStyles from "./heading.module.css"

const Heading = props => {
  switch(props.level) {
    case 1: 
      return <h1 className={cx(
        HeadingStyles.H1,
        {[HeadingStyles.underlined]: props.underlined}
      )}>{props.text}</h1>
    case 2:
      return <h2 className={cx(
        HeadingStyles.H2,
        {[HeadingStyles.underlined]: props.underlined}
      )}>{props.text}</h2>
    case 3:
      return <h3 className={cx(
        HeadingStyles.H3,
        {[HeadingStyles.underlined]: props.underlined}
      )}>{props.text}</h3>
    case 4:
      return <h4 className={cx(
        HeadingStyles.H4,
        {[HeadingStyles.underlined]: props.underlined}
      )}>{props.text}</h4>
    case 5:
      return <h5 className={cx(
        HeadingStyles.H5,
        {[HeadingStyles.underlined]: props.underlined}
      )}>{props.text}</h5>
    default:
      return null
  }
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  underlined: PropTypes.bool
}

export default Heading
