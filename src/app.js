import React from "react"
import Button from "../ui-kit/dist/button.js"

const App = () => 
  <div>
      I'm an APP
    <Button onClick={() => console.log('clicked')}>Click me</Button>
  </div>

export default App
