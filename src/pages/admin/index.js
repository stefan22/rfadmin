import React from "react";
import { compose } from "recompose";
import { ADMIN } from "../../helpers/roles";
import { withAuthorization } from "../../components/Session";

const isAdmin = authUser =>
  !!authUser &&
  authUser.roles !== undefined &&
  authUser.roles[0] === ADMIN;

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>User needs to have a role set to admin in Firestore dB</p>
    <p>User also needs to be signed in.</p>

    <h2>Home and account</h2>
    <p>
      These pages have firebase Auth; which it only allows
      authenticated/signed in users access.
    </p>
  </div>
);

export default compose(withAuthorization(isAdmin))(AdminPage);
