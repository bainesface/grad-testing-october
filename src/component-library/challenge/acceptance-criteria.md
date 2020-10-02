# Introduction to our component library

We're going to build some simple components, test-first, to get comfortable with the most frequently-used parts of React Testing Library.

As we begin to build our application, we will use the components in our component library to create our features.

## Business case

The business has grown tired of inconsistent looking user interfaces, so we are going to build a library of standardised UI components that we can share across our products.

## Build a button component

- The button's text can be set via children e.g `<Button>text</Button>`
- An `onClick` callback function should be provided to the button. It should be called when the button is clicked
- When the button is in a disabled state, clicking the button will no longer trigger the `onClick` handler.
- The button styling should reflect the disabled state of the button

Hints:

- While the button styling during disabled state is mentioned as an acceptance criteria, in this instance the styling will be applied for free, so don't worry about having to style the button itself

## Build an image component

- The image's source can be set
- The image's alt text can be set

## Build a cat pet counter component

We have a grumpy cat 😾. Make him happy by petting him five times 😺

- Use the Button and Image components you just created to create the functionality for this component
- Use the provided grumpy and happy images
- Display the number of pets starting at zero. When the button is clicked, increment the value by one
- When the number of pets reaches 5, change the image to display the happy image and disable the button
- Clicking further times should no longer increment the number of pets
- Don't worry about styling the component to look pretty at this stage

Grumpy cat url: https://imgur.com/g3LfxdB.jpg
Happy cat url: https://i.imgur.com/iA0brpK.jpg
