# Setup UI Kit with Rollup

## The aim
To have a collection of reusable components that are published on [npm](https://npmjs.org) and consumed by projects

## Running
### UI Kit
- Generating the components after cloning, run `cd ui-kit` and install dependencies `yarn install` 
- To compile run
  - `yarn build:dev` for development builds
  - `yarn build:prod` for production builds
  - `yarn watch` for development watched build

### Test App
From the project root run `yarn start`

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
- [x] Publish components to npm
- [ ] Add storybook and use components
