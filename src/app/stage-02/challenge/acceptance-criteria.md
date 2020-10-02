# Business case

Providing indication to a user that a form is currently submitting is helpful, especially for those on slower connections such as 3G

## Acceptance Criteria

- When the user has input a correct email address and submitted the form the text in the submit button should update from "Subscribe" to "Submitting…"

## Hints

- `.toHaveTextContent` is a good assertion to test what text a given node contains. For more assertions see [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)
