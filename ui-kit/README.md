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
  - `background`: `string` URL or any supported [CSS background value](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - `color`: `string` a color value
  - `minHeight`: `string` a height value
- Heading
  - `level`: `number` in the range of `1-5`
  - `text`: `string` text for the heading
  - `underlined`: `boolean` To display underlined headings 
- List
  - `ordered`: `boolean` For an ordered list
  - `minimal`: `boolean` Removes list styles
