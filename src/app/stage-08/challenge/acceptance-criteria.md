# Business case

We would like to provide some error tracking to our application so the business is made aware of subscription errors and can track what caused the failures.

## Acceptance criteria

- Use the fake tracking library supplied in this project
- Pass the entire error object to the service

## Hints

- The error tracking library can be imported as follows
  ```jsx
  import { errorTracking } from '_fakeModules';
  ```
- The errorTracking library has a `.track()` method that you can pass the error object to.
- `jest.mock()` should be used to mock the library and with that you can listen to calls to that function. See [https://jestjs.io/docs/en/mock-functions.html#mocking-modules](https://jestjs.io/docs/en/mock-functions.html#mocking-modules) for more information
