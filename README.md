[![DeepScan grade](https://deepscan.io/api/teams/16862/projects/20189/branches/544273/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16862&pid=20189&bid=544273) &nbsp;
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https:/github.com/stefan22/rfadmin.git) &nbsp; ![GitHub last commit](https://img.shields.io/github/last-commit/stefan22/rfadmin?color=red&style=flat-square) &nbsp; [![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)

<br />


# RFAdmin Dashboard


## About this project:

An Admin dashboard created with React, ES6, Firebase, Sass, Material UI, GSAP, Jest, Enzyme, and Styled components. User access to pages depend on whether a user is signed in or not. It is a starting template that it can be used to put together a full-blown client-server architecture project.

- Authentication: signup, signin and signout, password reset, password forgotten
- Route guards to protect against unauthenticated users
- Users/roles managed with Firebase Firestore database.


## Firebase

Firebase used to connect React application to a database, to authenticate and register users as well as setting up user access.    
It requires a Firebase account for database, SDK and CLI. 


<br />


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

