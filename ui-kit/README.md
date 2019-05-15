# UI Kit by [TalentedUnicorn](https://github.com/talentedunicorn)
> Small UI kit built on ReactJs

## Usage
- Install `yarn add talentdunicorn-ui-kit`
- Include in your project `import { [Component Name] } from "talentedunicorn-ui-kit"`

## Components
- Button
  - `handleClick`: Function to handle click events *Required*
  - `type`: Sets the type, currently supported `["hollow"]`
- Hero
  - `background`: URL or any supported [CSS background value](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - `minHeight`: a height value
- Heading
  - `level`: A number in the range of `1-5`
  - `text`: A string text for the heading
  - `underlined`: A boolean to displayed underlined headings 
- List
  - `ordered`: For an ordered list
  - `minimal`: Removes list styles
