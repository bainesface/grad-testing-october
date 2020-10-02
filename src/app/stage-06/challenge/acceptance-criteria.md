# Business case

We are displaying the correct information to the user based on whether the user has successfully subscribed to our newsletter.

However, our UX team is not happy because visually the information doesn't look clear enough to end users. They have therefore designed a new component that they are calling the "Alert" component, which will be used to display success or error messages to our users.

Because this is a shared component, we are going to go back to our shared library and create this component in isolation before bringing it into our application for real.

So in a change to our usual pattern of building a new feature in our application, for this challenge we would like you to go back to the component library and complete the challenge there.

## Acceptance criteria

- The Alert component should render any children passed to it
- Consumers should be able to change the type of the component to be either "error", "success" or "info", with "info" being the default if no option is chosen
- An Info type will render a purple line on the left hand side
- An Error type will render a red line on the left hand side
- A success type will render a green line on the left hand side
- The line can also be configured to appear on the top of the component instead of on the left
- The line will appear on the left hand side by default
- All the colour combinations will work for the component in both a left hand side and top line configuration
- Should have a configurable data-testid that has a default value of "alert-component"

## Hints

- We have already written the CSS for you. In order to ensure the design looks right, please use the following JSX structure and class names:

  ```jsx
  <div className="alert-component">{children}</div>
  ```

- There are some modifier classes you can use for the `info`, `success`, `error`, and `top border` states:

  - alert-component--info
  - alert-component--success
  - alert-component--error
  - alert-component--top-border

- You can apply these classes by adding them to the `alert-component` div, for example:

  ```jsx
  <div className="alert-component alert-component--success">
  ```
