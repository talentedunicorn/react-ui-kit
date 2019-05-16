import React from "react"
import HeroStyles from "./hero.module.css"
import PropTypes from "prop-types"

const Hero = props => 
  <section
    className={HeroStyles.Hero}
    style={{
      background: props.background,
      minHeight: props.minHeight,
      ...props.style
    }}>
    {props.children}
  </section>

Hero.propTypes = {
  background: PropTypes.string,
  minHeight: PropTypes.string,
  style: PropTypes.object
}

export default Hero
