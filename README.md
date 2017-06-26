# React Medellín Components Library
[![Build Status](https://travis-ci.org/react-medellin/components.svg?branch=master)](https://travis-ci.org/react-medellin/components)

# What is @react-medellin/components
A set of reusable React components that everyone can use. This project was created mainly to teach how to create a reusable component library to atendees to React Medellín Meetup ([Feel curious? Join us!](https://meetup.com/React-Medellin))

# Installation
Firs of all, this library has two peer dependencies: React and [Styled Components](https://github.com/styled-components/styled-components) so you must have those two first installed for this library to work properly.

In case you're still reading (yes!) you can install this library by typing `npm install --save @react-medellin/components` or if you're using yarn you can do `yarn add @react-medellin/components`

# Usage
Right now we have 2 components in the library, a `<Button />` and a `<Banner />` component, you can import them by doing this in any of your files:
```js
import { Button, Banner } from '@react-medellin/components';
```

# Contribute
We're using [Storybook](https://github.com/storybooks/storybook) for local development so you can see how the components will look like without using the not so beginner friendly `npm link`. For start playing around with this components, you just need to run `npm run dev` or `yarn dev` and then open `http://localhost:9001`
All contributors are welcome!

# Questions?
Go and open an issue, we'll be happy to help!

# Can I use this components in my application?
Off course you can! Please do it!
