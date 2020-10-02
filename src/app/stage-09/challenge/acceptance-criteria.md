# Business case

We would like to provide a section above the subscribe section that lists all of Purrfect Pets.

## Acceptance criteria

- Use the `/pets` endpoint with a GET request to fetch the pets
- Render the pet title and the image
- render a loading state while waiting for the pets to be returned from the service
- render an error message using the `<Alert>` component from the component library if the service fails
- render the image inside of the `<Image>` component from the component library

## Hints

- If the service fails it should return a `500` for the purposes of this exercise
- Use the Nock library to intercept the GET request and return mock data [https://github.com/nock/nock#usage](https://github.com/nock/nock#usage)
- The `<Alert>` component can take an "error" variant
- JSX/Markup will look like the following for displaying the list of pets

```jsx
<ul className="grid">
  <li className="grid__item">
    <div className="card">
      <div className="preserve-aspect ar-16-9">
        <Image src={IMAGEURL} alt={`Photograph of [NAME]`} />
      </div>
      <div className="card__content">
        <h2>{NAME}</h2>
      </div>
    </div>
  </li>
</ul>
```

- The loading state will render as follows

```jsx
<p className="text-center">Loading pets…</p>
```

- The error state will render as follows

```jsx
<Alert variant="VARIANT">Unable to fetch pets.</Alert>
```

- All the work for this stage will be done in PetsList.js and PetsList.test.js. There is no requirement to touch any other files.
- You can simulate an error in the `/pets` service by heading to `/server/endpoints.js` and uncommenting line 2 then restart create-react-app and the server `yarn start`. Be sure to comment this back out to ensure the service returns the pets once you're done.
