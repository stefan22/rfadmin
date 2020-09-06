const accordionData = [
  {
    title: "Home/ Account, Admin & Signout",
    content:
      "<p>To access these three pages you need to first register/signed in. Once registered, both pages: Home and Account become available. Admin page, however it's only reachable with a user role of Admin. Signin out off Dashboard page, it will not redirect back to Signin page, but signing out from Account, it will. This is because protected routes aren't accessible without an account.</p>",
  },
  {
    title: "Dashboard, Signin/ Signup pages",
    content:
      "Similar to Dashboard, Signup and Signin are open to all users, meaning they're also available once a user signs in. When if successfull, it gets redirected to the Home page. Otherwise, if auth fails it's redirected to Signin page.",
  },
  {
    title: "Firebase class",
    content:
      "It contains all of the Firebase configuration needed in order to access the realtime database and built-in authentication methods/ functionality. This can also be done with a back-end service using GC functions. (See Chat App).",
  },
  {
    title: "React Context API",
    content:
      "Rather than creating a new Firebase instance off the class, and then having to import it into every component, it sets the context provider in App.js. The consumer context, it's been abstracted and passed within a new HOC so that all it's required now is to call it using 'withFirebase' as needed.",
  },
  {
    title: "Authentication HOC",
    content:
      "It provides all of the logic support for FB built-in authentication methods as it tracks current user through out application using React context. It shows different options depending on state of current user. It returns an object when user is authenticated and null when it's not.",
  },
  {
    title: "Authorization HOC",
    content:
      "Similar to Authentication; however Authorization unlike Authentication, it implements route protection. It checks whether a user is authenticated. If it's not, it will then redirect user to a public route. It uses a HOC to encapsulate logic away from components and it's used by calling withAuthorization on a component.",
  },
  {
    title: "Page animation",
    content:
      "Page animation requires React CSS transitions and React Transition Group imported within routes and passing location history as an argument to each route. The idea is to place one page on top of another if only for a few miliseconds; which is done by positioning both pages to absolute positioning with CSS. In order to do this, first set the timeout temporarily to a large number like maybe 60 sec (in miliseconds), then using the development console make the  necessary adjustments to both pages.",
  },
];

export default accordionData;
