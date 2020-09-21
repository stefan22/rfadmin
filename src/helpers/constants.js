/* Urls ----------------------------------------------- */

export const DASHBOARD = "/";
export const SIGNUP = "/signup";
export const SIGNIN = "/signin";
export const SIGNOUT = "/signout";
export const HOME = "/home";
export const ADMIN = "/admin";
export const ADMIN_DETAILS = "/admin/:id";
export const ACCOUNT = "/account";
export const PASSWORD_FORGET = "/password_forget";
export const PASSWORD_RESET = "/password_reset";

export const regRoutes = ["DASHBOARD", "SIGNUP", "SIGNIN"];
export const admRoutes = ["DASHBOARD", "HOME", "ACCOUNT", "ADMIN"];

/** Dashboard page */
export const title = "Dashboard";
export const substitle =
  "Landing page open to signed and non-signed-in users alike";

/* Dashboard side col */
export const sides = [
  {
    name: "Protected pages",
    to: "protected",
  },
  {
    name: "Section 2",
    to: "section2",
  },

  {
    name: "Section 3",
    to: "section3",
  },

  {
    name: "Section 4",
    to: "section4",
  },
];

/* Other ----------------------------------------- 
-
∆
see assets fldr under construction [separate project to be build on top of this]

*/

export const shopbx1 = "shopbx1";
export const shopbx2 = "shopbx2";
export const shopbx3 = "shopbx3";
export const shopbx4 = "shopbx4";
