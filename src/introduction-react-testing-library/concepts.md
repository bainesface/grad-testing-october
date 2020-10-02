# Concepts

- React testing library api and setup
- Jest dom
- Accessibility

## React Testing Library API and Setup

We will be using [React Testing Library](https://github.com/testing-library/react-testing-library) for this course. React Testing Library is different to other libraries you may have used, because it is based on the principle of testing against rendered DOM output instead of testing internals. From the docs:

> As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

This ties in nicely with our aim to create tests that help us to make changes with confidence over time.

## Jest DOM

We are using the [Jest DOM](https://github.com/testing-library/jest-dom) library to give us nice assertions to test the DOM. From the docs:

> You want to use jest to write tests that assert various things about the state of a DOM. As part of that goal, you want to avoid all the repetitive patterns that arise in doing so. Checking for an element's attributes, its text content, its css classes, you name it.

## Accessibility

One of the nice things about React Testing Library is that it has methods built in that implicitly test components for accessibility concerns. Using [selectors](https://testing-library.com/docs/guide-which-query) such as `getByRole`, `getByLabelText` and `getByAltText` will prevent some common accessibility violations as well as asserting against behaviours that you want to test. It is recommended to use these selectors where possible.
