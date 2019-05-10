# Setup UI Kit with Rollup

## The aim
To have a collection of reusable components that are published on [npm](https://npmjs.org) and consumed by projects

## Project structure

- package.json <>With webpack to serve client<>
- /public <>Serves development site<>
  - index.html
- /ui-kit
  - package.json <>With rollup<>
    - src
      - button.js
      - heading.js

## Todo
- [ ] Publish components to npm
- [ ] Add storybook and use components
