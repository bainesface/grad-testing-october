# Concepts

- Understanding the value we aim to get from our tests, and applying a test strategy based on that contextual understanding
- Multiple assertions in a single test
- Testing a component in isolation (eg proving callbacks are called)
- Testing the use of a components built in isolation

## Understanding the value we aim to get from our tests, and applying a test strategy based on that contextual understanding

One of the key points we would like to teach is that the way you test your code may vary depending on a contextual understanding of what it is you are building. In this instance, we are proposing to begin work on building a set of re-usable components that in a real situation may be shared across multiple applications and multiple teams.

While the approach we are suggesting for the most part encourages us to not think about testing code in pure isolation, no rule is set in stone, so we encourage you to apply your judgement and to consider the value of the tests you are writing at any given stage.

Because these components are likely to be used in many different places and contexts, it makes sense to test them in a solitary manner in this case.

## Multiple assertions in a single test

This may be a controversial one, but we have found that multiple assertions can be useful in proving a single behaviour. Some people disagree with this notion, but we believe it can help your tests to be more useful. There's an article here that touches on this concept: https://kentcdodds.com/blog/test-isolation-with-react

## Testing a component in isolation

The approach we use discourages thinking about the "unit" as isolated code, instead encouraging the idea that a "unit" is a behaviour and not code. However, this is not a black and white rule as there can be occasions where it makes sense to still test components in pure isolation. A component library is a good example of such a use case. In this instance, we're pretending we're building out a component library.

## Testing the use of components built in isolation

We then want to test the use of these components, in such a way that you might be expected to if you were consuming custom components and composing them together to create some new functionality. We won't want to test all the individual components, but we will want to test that they work together as expected, and we will do this by testing against the output in the DOM via user interactions. This form of testing encourages you to test like a user would interact with your application and encourages tests that fail when the application is in a broken state, and pass when it's in a working state. If you test in this manner, you can refactor with confidence because your tests are not tightly coupled to the internal implementation in any way.
