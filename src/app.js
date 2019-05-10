import React from "react"
import Button from "../ui-kit/dist/button.js"
import Heading from "../ui-kit/dist/heading.js"
import Hero from "../ui-kit/dist/hero.js"

const ContainerStyles = {
  maxWidth: `var(--max-width)`,
  marginLeft: `auto`,
  marginRight: `auto`,
  padding: `var(--space)`
}

const App = () => 
  <>
    <Hero background="hsl(21, 66%, 76%)">
      <Heading level={1} text="UI Kit" />
      <Heading level={3} text="Building UI Kit with React using RollUp.js" />
      <Button>Get started &nbsp;<span role="img" aria-label="unicorn">🦄</span></Button>
    </Hero>

    <section style={ContainerStyles}>
      <Heading level={1} text="Heading level 1"/>
      <Heading level={2} text="Heading level 2"/>
      <Heading level={3} text="Heading level 3"/>
      <Heading level={4} text="Heading level 4"/>
      <Heading level={5} text="Heading level 5"/>
    </section>
  </>

export default App
