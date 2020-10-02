[![CircleCI](https://circleci.com/gh/citypaul/north-coders-tdd-workshop/tree/master.svg?style=svg&circle-token=cafe7d62cc20816d09cf619b0ee5703b67340068)](https://circleci.com/gh/citypaul/north-coders-tdd-workshop/tree/master)

# The Pet Store 🐈

## Setup Environment

1. This workshop was written in node `11.14.0`. While it should be compatible with later versions of node, if you do have any issues it is worth installing this version specifically. If you have Node Version Manager (NVM) installed you can use the command `nvm use` to switch to this version. If you don't have `11.14.0` installed it will prompt you to install it with the command `nvm install 11.14.0`.

2. Copy the contents of `.env.example` into a new file `.env` in the root directory. **The tests will not pass unless you do this.**
   This configures the app to point to the API service URL.

### ⚠️🚨 Please do not use npm. We used yarn while building the project, and while testing it with npm we found issues during installation. Please use yarn instead of npm 🚨⚠️

[Here are instructions to install Yarn on MacOS.](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

[Here are instructions to install Yarn on Windows.](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

## Install: `yarn install` 😸

Install all required dependencies to run this application.

## `yarn start` 😻

Runs the app in the development mode.

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The app will update as you make changes without reloading thanks to HMR!
- Lint errors will be displayed in the console.
- Running this command will also start the api server [http://localhost:3001/pets](http://localhost:3001/pets)

### API endpoint

GET [http://localhost:3001/pets](http://localhost:3001/pets)
Returns all the pets.

## `yarn lint`

Run the linter

## `yarn lint:fix`

Run the linter and attempt to fix errors.

## `yarn test`

Run tests in Jest watch mode.

## `yarn test:coverage`

Run tests in Jest watch mode with coverage.
