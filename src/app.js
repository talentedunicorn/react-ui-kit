import React from "react"
import { Button, Heading, Hero } from "talentedunicorn-ui-kit"

const ContainerStyles = {
  maxWidth: `var(--max-width)`,
  marginLeft: `auto`,
  marginRight: `auto`,
  padding: `var(--space)`
}

const customHeadingStyles = {
  textTransform: `uppercase`,
  letterSpacing: `var(--letter-space)`
}

const fakeClickHandler = (e) => console.log('I has been clicked', e)

const App = () => 
  <>
    <Hero background="hsl(21, 66%, 76%)">
      <div style={{padding: `calc(var(--space) * 2)` }}>
        <Heading level={1} text="UI Kit" />
        <p>A small UI Kit of React components</p>

        <Heading level={4} text="Getting started" underlined={true} />
        <pre>npm install talentedunicorn-ui-kit</pre>
        <p>Or on Yarn</p>
        <pre>yarn add talentedunicorn-ui-kit</pre>
      </div>
    </Hero>

    <div style={ContainerStyles}>
      <section style={{ marginBottom: `calc(var(--space) * 4)` }}>
        <Heading level={5} text="Headings" underlined={true} style={customHeadingStyles}/>
        <Heading level={1} text="Heading level 1"/>
        <Heading level={2} text="Heading level 2"/>
        <Heading level={3} text="Heading level 3"/>
        <Heading level={4} text="Heading level 4"/>
        <Heading level={5} text="Heading level 5"/>
      </section>

      <section style={{ marginBottom: `calc(var(--space) * 4)` }}>
        <Heading level={5} text="Buttons" underlined={true} style={customHeadingStyles}/>
        <Button handleClick={fakeClickHandler}>Default</Button>
        <Button disabled={true} handleClick={fakeClickHandler}>Disabled button</Button>
        <Button type="hollow" handleClick={fakeClickHandler}><span role="img" aria-label="fire">🔥</span>buttons</Button>
        <Button disabled={true} handleClick={fakeClickHandler} type="hollow">Disabled button</Button>
      </section>
    </div>
  </>

export default App
