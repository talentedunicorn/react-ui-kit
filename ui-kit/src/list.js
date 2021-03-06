import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import ListStyles from "./list.module.css"

const List = props => {
  let styles = ListStyles.List 
  switch(true) {
    case props.minimal:
      styles = ListStyles.minimal
      break
    default:
      break
  }

  if (props.ordered) {
    return <ol style={props.style} className={cx(styles, props.className)}>{props.children}</ol>
  }

  return <ul style={props.style} className={cx(styles, props.className)}>{props.children}</ul>
}

List.propTypes = {
  ordered: PropTypes.bool,
  minimal: PropTypes.bool,
  style: PropTypes.object
}

export default List

