# Business case

We would like to create a service layer that will abstract the knowledge of endpoints and HTTP fetching library from our React components.
This decoupling will enable these functions to be re-used in other areas of the application and if we decide to change our service APIs it will only require updates to the service layer in the application.

## Acceptance criteria

- The service API should export a `fetchPets` function that will return a promise that resolves to the pets or rejects if an error is returned.
- The service API should export a `subscribe` function that takes an email and posts it to the service returning an empty Promise that either resolves or rejects.
- The `/pets` and `/subscribe` endpoints should be entirely contained within the service file, the React components having no knowledge of these
- The service should have it's own tests given these functions are intended to be re-used in the future.

## Hints

- There should be no need to modify the existing tests, running them while you do the refactoring should give you confidence in that if they go green at the end then you can be certain that functionality hasn't been broken!
