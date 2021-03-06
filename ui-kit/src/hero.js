import React from "react"
import HeroStyles from "./hero.module.css"
import PropTypes from "prop-types"
import cx from "classnames"

const Hero = props => 
  <section
    className={cx(HeroStyles.Hero, props.className)}
    style={{
      background: props.background,
      minHeight: props.minHeight,
      color: props.color
    }}>
    {props.children}
  </section>

Hero.propTypes = {
  background: PropTypes.string,
  minHeight: PropTypes.string,
  color: PropTypes.string
}

export default Hero
