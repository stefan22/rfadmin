import React from "react";
import { withLoading } from "../../components/loading";
import "./styles.scss";

const AdminMain = props => {
  return (
    <div className="admin-maincontent">
      <h1>Admin</h1>
      <p>User needs to have a role set to admin in Firestore dB</p>
      <p>User also needs to be signed in.</p>

      <section className="admin-users">
        {props.users.map(itm => (
          <ul key={itm.uid}>
            <li>{itm.created}</li>
            <li>{itm.email}</li>
            <li>{itm.emailVerified}</li>
            <li>{itm.lastSignedIn}</li>
            <li>{itm.uid}</li>
            <li>{itm.username}</li>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default withLoading(AdminMain);
