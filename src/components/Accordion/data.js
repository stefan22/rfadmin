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
      "It provides authentication for the Firebase built-in authentication methods. It provides authentication for the Firebase built-in authentication methods.",
  },
  {
    title: "Authorization HOC",
    content:
      "Similar to Authentication but it handles user's roles. It provides authentication for the Firebase built-in authentication methods as well. It provides authentication for the Firebase built-in authentication methods",
  },
  {
    title: "Routes",
    content:
      "Routes are set in constants js file. constants js file. It will redirect you to home page, if successful. Signin out from Dashboard it will not redirect you to signin.",
  },
  {
    title: "Page animation",
    content:
      "Page animation requires React CSS transitions and React Transition Group imported within routes and passing location history as an argument to each route. The idea is to place one page on top of another if only for a few miliseconds; which is done by positioning both pages to absolute positioning with CSS. In order to do this, first set the timeout temporarily to a large number like maybe 60 sec (in miliseconds), then using the development console make the  necessary adjustments to both pages.",
  },
];

export default accordionData;
