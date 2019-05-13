import React from "react"
import Button from "../ui-kit/dist/dev/button.js"
import Heading from "../ui-kit/dist/dev/heading.js"
import Hero from "../ui-kit/dist/dev/hero.js"

const ContainerStyles = {
  maxWidth: `var(--max-width)`,
  marginLeft: `auto`,
  marginRight: `auto`,
  padding: `var(--space)`
}

const App = () => 
  <>
    <Hero background="hsl(21, 66%, 76%)">
      <div style={{padding: `calc(var(--space) * 2)` }}>
        <Heading level={1} text="UI Kit" />
        <Heading level={3} text="Building UI Kit with React using RollUp.js" />
        <Button>Get started &nbsp;<span role="img" aria-label="unicorn">🦄</span></Button>
      </div>
    </Hero>

    <div style={ContainerStyles}>
      <section style={{ marginBottom: `calc(var(--space) * 4)` }}>
        <Heading level={4} text="Headings" underlined={true}/>
        <Heading level={1} text="Heading level 1"/>
        <Heading level={2} text="Heading level 2"/>
        <Heading level={3} text="Heading level 3"/>
        <Heading level={4} text="Heading level 4"/>
        <Heading level={5} text="Heading level 5"/>
      </section>

      <section style={{ marginBottom: `calc(var(--space) * 4)` }}>
        <Heading level={4} text="Buttons" underlined={true}/>
        <Button>Default</Button>
        <Button disabled={true}>Disabled button</Button>
        <Button type="hollow"><span role="img" aria-label="fire">🔥</span>buttons</Button>
        <Button disabled={true} type="hollow">Disabled button</Button>
      </section>
    </div>
  </>

export default App
