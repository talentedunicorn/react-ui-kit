import React from "react"
// import { Button, Heading, Hero } from "talentedunicorn-ui-kit" // For latest stable
import { Button, Heading, Hero, List } from "../ui-kit/dist/dev/index.js" // For development

const ContainerStyles = {
  maxWidth: `var(--max-width)`,
  marginLeft: `auto`,
  marginRight: `auto`,
  padding: `var(--space)`
}

const customHeadingStyles = {
  textTransform: `uppercase`,
  letterSpacing: `var(--letter-space)`,
  margin: `var(--space) 0 0`
}

const sectionStyles = {
   marginBottom: `calc(var(--space) * 8)` 
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
      <section style={sectionStyles}>
        <Heading level={2} text="Headings" underlined={true} style={customHeadingStyles}/>
        <Heading level={1} text="Heading level 1"/>
        <Heading level={2} text="Heading level 2"/>
        <Heading level={3} text="Heading level 3"/>
        <Heading level={4} text="Heading level 4"/>
        <Heading level={5} text="Heading level 5"/>

        <Heading level={3} text="Underlined" style={customHeadingStyles}/>
        <Heading level={1} text="Underlined heading" underlined={true}/>
      </section>

      <section style={sectionStyles}>
        <Heading level={2} text="Buttons" underlined={true} style={customHeadingStyles}/>
        <Button handleClick={fakeClickHandler}>Default</Button>
        <Button disabled={true} handleClick={fakeClickHandler}>Disabled button</Button>
        <Button type="hollow" handleClick={fakeClickHandler}><span role="img" aria-label="fire">🔥</span>buttons</Button>
        <Button disabled={true} handleClick={fakeClickHandler} type="hollow">Disabled button</Button>
      </section>

      <section style={sectionStyles}>
        <Heading level={2} text="Lists" underlined={true} style={customHeadingStyles}/>
        <Heading level={3} text="Default" style={customHeadingStyles}/>
        <List>
          <li>Robert the Great</li>
          <li>Yusuf Al Bin Damn</li>
          <li>The Migos</li>
        </List>

        <Heading level={3} text="Ordered" style={customHeadingStyles}/>
        <List ordered={true}>
          <li>Wan</li>
          <li>Too</li>
          <li>Tree</li>
        </List>

        <Heading level={3} text="Minimal" style={customHeadingStyles}/>
        <List minimal={true}>
          <li>Onion</li>
          <li>More Onion</li>
          <li>Water and Fire</li>
        </List>
      </section>
    </div>
  </>

export default App
