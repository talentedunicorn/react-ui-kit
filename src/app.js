import React from "react"
// import { Button, Heading, Hero } from "talentedunicorn-ui-kit" // For latest stable
import { Button, Heading, Hero, List } from "../ui-kit/dist/dev/index.js" // For development

import "./app.css"

const fakeClickHandler = (e) => console.log('I has been clicked', e)

const App = () => 
  <>
    <Hero className="UIKit-hero" 
      color="var(--white)"
      minHeight="40vh"
      background="linear-gradient(169deg, hsl(21, 66%, 76%), hsl(327, 72%, 66%))">
      <Heading level={1} text="UI Kit" />
      <p>A small UI Kit of React components</p>

    </Hero>
    <main className="UIKit-content">
      <section className="Container section">
        <Heading level={2} text="Getting started" className="cool-heading" />
        <pre>npm install talentedunicorn-ui-kit</pre>
        <p>Or on Yarn</p>
        <pre>yarn add talentedunicorn-ui-kit</pre>
      </section>

      <section className="Container section">
        <Heading level={2} text="Usage" className="cool-heading"/>
        <p>Import the component into your code</p>
        <pre>import {`{ Button }`} from 'talentedunicorn-ui-kit'</pre>
        <p>Use the component</p>
        <pre>
          {`<Button className="dope" handleClick={myClickHandler}>Do something cool</Button>`}
        </pre>
        <Button className="dope" handleClick={() => alert('Yo sup 😎')}>Do something cool</Button>
      </section>

      <section className="Container Section">
        <Heading level={2} text="Components" className="cool-heading"/>
        <Heading level={3} text="Headings" className="cool-heading"/>
        <pre>{`<Heading level={1|2|3|4|5} text="A heading for something" className="add-custom-classes"/>`}</pre>
        <Heading level={1} text="Heading level 1"/>
        <Heading level={2} text="Heading level 2"/>
        <Heading level={3} text="Heading level 3"/>
        <Heading level={4} text="Heading level 4"/>
        <Heading level={5} text="Heading level 5"/>

        <Heading level={1} text="Large custom heading" className="custom-heading" />
        <Heading level={1} underlined={true} text="Underlined heading"/>
      </section>

      <section className="Container Section">
        <Heading level={3} text="Buttons" className="cool-heading"/>
        <pre>{`<Button type="hollow|default:omit attribute" handleClick={yourClickHandler} disabled={true|false} className="add-custom-classes"/>`}</pre>
        <Button handleClick={fakeClickHandler}>Default</Button>
        <Button disabled={true} handleClick={fakeClickHandler}>Disabled button</Button>
        <Button type="hollow" handleClick={fakeClickHandler}>Hollow buttons</Button>
        <Button disabled={true} handleClick={fakeClickHandler} type="hollow">Disabled button</Button>

        <Button className="dope" handleClick={fakeClickHandler}><span role="img" aria-label="fire">🔥</span>Dope ass button</Button>
      </section>

      <section className="Container Section">
        <Heading level={3} text="Lists" className="cool-heading"/>
        <pre>{`<List ordered={true|default:false} minimal={true|default:false}>...<li></li></List>`}</pre>
        <Heading level={4} text="Default" className="cool-heading"/>
        <List>
          <li>Robert the Great</li>
          <li>Yusuf Al Bin Damn</li>
          <li>The Migos</li>
        </List>

        <Heading level={4} text="Ordered" className="cool-heading"/>
        <List ordered={true}>
          <li>Wan</li>
          <li>Too</li>
          <li>Tree</li>
        </List>

        <Heading level={4} text="Minimal" className="cool-heading"/>
        <List minimal={true}>
          <li>Onion</li>
          <li>More Onion</li>
          <li>Water and Fire</li>
        </List>
      </section>

      <section className="Section">
        <div className="Container">
          <Heading level={3} text="Hero" className="cool-heading"/>
          <pre>{`<Hero background="provide css background property" color="any valid css color format" minHeight="minimum height" className="add custom classes""/>`}</pre>
        </div>
        <Hero className="UIKit-hero align-right" color="var(--white)" background="linear-gradient(to left, hsla(0, 0%, 3%, 0.8) 50%, transparent), url(https://images.unsplash.com/photo-1562679452-763edf60a0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80) no-repeat center center/cover" minHeight="50vh">
          <div>
            <Heading level={1} text="We (KNEE)d you" />
            <Heading level={3} text="Help us do more for your business." />
            <List minimal={true}>
              <li>Drive customers straight to your door</li>
              <li>Even deliver your food</li>
            </List>

            <Button handleClick={() => alert('Call me maybe 🤙')}>Get in touch</Button>
          </div>
        </Hero>
      </section>
    </main>
    <footer className="UIKit-footer">
      <div className="Container">
        <p>Made by <a href="//talentedunicorn.com" rel="noreferrer noopener">TalentedUnicorn</a></p>
        <a href="https://github.com/talentedunicorn/react-ui-kit" rel="noreferrer noopener">View on Github</a>
      </div>
    </footer>
  </>

export default App
