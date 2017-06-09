# React Medellín Components Library

First _naive_ approach for a reusable component library.

## How to install this on your projects?
`yarn add @react-medellin/components` or if you're using npm `npm install --save @react-medellin/components`

## ⚠️ Relevant NPM scripts ⚠️
- `npm run build` -> to build our project
- `npm run lint` -> to check for lint errors
- `npm run test` -> to run our unit tests suite
- `npm run test:watch` -> to run our unit tests suite in watch mode
- `npm run quality` -> runs `npm run lint` AND `npm run test`
- `npm run deploy` -> runs `npm run quality` AND `npm run build` AND `npm publish`

## The important bits here
- 💅 Styled Components 💅 - As you can imagine, add style to our components!
- Prop Type checking using `prop-types` (`yarn add prop-types` / `npm install --save prop-types`)
- eslint - used to follow a coding standard + code quality
- Jest - Unit tests
- Enzyme - Unit tests

## What are we doing in here?
Basically we're building a set of reusable components, a Button and a Banner that we can use in React (and no React 😱) application we want.
