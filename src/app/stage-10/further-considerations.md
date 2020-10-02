# Further considerations

## Re-usable enough?

We now have a separate service layer for our HTTP requests - fantastic! But wait, let's imagine another team - say, the team responsible for social media widgets - wants to use our `<PetsList />` component. Easy - we just make the component available to them, probably by exporting it from our component library's npm package. But hold on one more second! The social media widgets will be displayed on websites with incredibly high traffic, which we don't want our API instances to have to handle. We could implement some devious caching logic in our service layer, but since our main application doesn't require this functionality, it would be adding complexity (and bundle size) with no benefit to the application. What if the social media widgets applications could provide their own service layer? As it stands, our `<PetsList />` component is intrinsically coupled to the service layer we've just written. But it doesn't have to be.

## Enter dependency injection

Dependency injection is the practice of providing a dependency to a function, class or component, rather than that entity directly requesting it itself. What does that look like in the case of our `<PetsList />`? Pretty simple, actually. All that changes in the component are two lines of code:

```diff
-import { fetchPets } from './services';

export class PetsList extends React.Component {
  state = {
    pets: [],
    error: false,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
-      const pets = await fetchPets();
+      const pets = await this.props.fetchPets();
```

You can see that the `<PetsList />` component now takes a function prop called `fetchPets` which will be provided by whatever renders it, meaning the social media widget applications can pass their own `fetchPets` function which includes whatever crazy caching is required, without impacting our application's codebase.

## TDD with DI

If you're thinking that our tests would need to change to accommodate the above, you're absolutely right. After all, we're looking to change how the `<PetsList />` component behaves, and if we've learnt anything in this course it's that tests are behaviour driven.

The TDD approach to injecting the `fetchPets` service would look something like this:

- New requirement: `<PetsList />` must take `fetchPets` via dependency injection
- Either:
  1. import our service layer into our test and provide it to the component, keeping the tests otherwise the same
  2. remove nock from our tests and create a test implementation of `fetchPets` which just returns the stub data in a promise
- Make the implementation change shown in the snippet above
- Any new consumers of `<PetsList />` would need to have tests around the service layer they pass in.

We already have tests around our service layer, so nothing to worry about there. Whether we choose option 1 or 2 above will depend on whether we prefer the injected service to be tucked away from our test code (option 1) or explicitly visible (option 2). Option 1 has the benefit of testing the particular integration of our actual service layer with the `<PetsList />` component. Option 2 would probably be more appropriate were we using TypeScript, because we could specify that the `fetchPets` prop must conform to a certain parameter and return signature - in plain JavaScript we'd be open to our test `fetchPets` potentially becoming out of sync with the real service layer, especially if it were owned by another team and its own npm package.
