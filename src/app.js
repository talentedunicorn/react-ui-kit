import React from "react"
// import { Button, Heading, Hero } from "talentedunicorn-ui-kit" // For latest stable
import { Button, Heading, Hero, List } from "../ui-kit/dist/dev/index.js" // For development

import "./app.css"

const fakeClickHandler = (e) => console.log('I has been clicked', e)

const App = () => 
  <>
    <Hero className="UIKit" 
      color="var(--white)"
      minHeight="40vh"
      background="linear-gradient(169deg, hsl(21, 66%, 76%), hsl(327, 72%, 66%))">
      <Heading level={1} text="UI Kit" />
      <p>A small UI Kit of React components</p>

    </Hero>
    <Hero className="Container">
      <Heading level={2} text="Getting started" underlined={true} />
      <pre>npm install talentedunicorn-ui-kit</pre>
      <p>Or on Yarn</p>
      <pre>yarn add talentedunicorn-ui-kit</pre>
    </Hero>

    <div className="Container">
      <section>
        <Heading level={2} text="Headings" underlined={true} className="cool-heading"/>
        <Heading level={1} text="Heading level 1"/>
        <Heading level={2} text="Heading level 2"/>
        <Heading level={3} text="Heading level 3"/>
        <Heading level={4} text="Heading level 4"/>
        <Heading level={5} text="Heading level 5"/>

        <Heading level={1} text="Large custom heading" className="custom-heading" />
      </section>

      <section>
        <Heading level={2} text="Buttons" underlined={true} className="cool-heading"/>
        <Button handleClick={fakeClickHandler}>Default</Button>
        <Button disabled={true} handleClick={fakeClickHandler}>Disabled button</Button>
        <Button type="hollow" handleClick={fakeClickHandler}>Hollow buttons</Button>
        <Button disabled={true} handleClick={fakeClickHandler} type="hollow">Disabled button</Button>

        <Button className="dope" handleClick={fakeClickHandler}><span role="img" aria-label="fire">🔥</span>Dope ass button</Button>
      </section>

      <section>
        <Heading level={2} text="Lists" underlined={true} className="cool-heading"/>
        <Heading level={3} text="Default" className="cool-heading"/>
        <List>
          <li>Robert the Great</li>
          <li>Yusuf Al Bin Damn</li>
          <li>The Migos</li>
        </List>

        <Heading level={3} text="Ordered" className="cool-heading"/>
        <List ordered={true}>
          <li>Wan</li>
          <li>Too</li>
          <li>Tree</li>
        </List>

        <Heading level={3} text="Minimal" className="cool-heading"/>
        <List minimal={true}>
          <li>Onion</li>
          <li>More Onion</li>
          <li>Water and Fire</li>
        </List>
      </section>

      <section>
        <Heading level={2} text="Hero" underlined={true} className="cool-heading"/>
        <Hero background="url(https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat bottom center/cover" minHeight="40vh">
          <Heading level={1} text="This is a Hero component" />
        </Hero>
      </section>
    </div>
  </>

export default App
