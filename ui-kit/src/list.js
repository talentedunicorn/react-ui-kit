import React from "react"
import PropTypes from "prop-types"

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
    return <ol className={styles}>{props.children}</ol>
  }

  return <ul className={styles}>{props.children}</ul>
}

List.propTypes = {
  ordered: PropTypes.bool,
  minimal: PropTypes.bool,
}

export default List

