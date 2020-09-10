const accordionData = [
  {
    heading: "Protected:& Not pages",
    title: "Home/ Account, Admin & Signout",
    content:
      "Register/signin to access Home, Account and Admin. Once registered, both pages: Home and Account become available. Admin page, however it's only reachable with a user role of admin.",
  },
  {
    title: "Dashboard, Signin/ Signup pages",
    content:
      "Similar to Dashboard, Signup and Signin are shared pages. Signin out off Dashboard will not redirect back to Signin, but signing out from Account page, it will. This is because like Home and Admin pages, it's a protected route.",
  },
  {
    heading: "Firebase Component",
    title: "Firebase class",
    content:
      "It contains all of the Firebase configuration needed in order to access the realtime database and built-in authentication methods/ functionality.",
  },
  {
    title: "React Context API",
    content:
      "Rather than creating a new Firebase instance off the class, and then having to import it into every component, it uses React context API. Most of its logic abstracted away and consumed using withFirebase instead.",
  },
  {
    heading: "Higher Order Components",
    title: "Authentication HOC",
    content:
      "It provides all of the logic support for FB built-in authentication methods. It returns an object when user is authenticated and null if it's not.",
  },
  {
    title: "Authorization HOC",
    content:
      "It implements route protection. It checks whether a user is authenticated. If it's not, it will then redirect user to a public route. It uses a HOC to encapsulate logic away from components and execute by calling withAuthorization on a component.",
  },
  {
    heading: "Other",
    title: "Page animation",
    content:
      "Page animation with React Transition Group. React router to pass location, and briefly place one page on top of another with CSS absolute positioning.",
  },
  {
    title: "HOC | re-usable list component",
    content:
      "List HOC to render these Accordion components. It takes two arguments: a function component named item and a data array called items.",
  },
];

export default accordionData;
