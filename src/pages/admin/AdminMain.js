import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withLoading } from "../../components/loading";
import "./styles.scss";

const AdminMain = props => {
  return (
    <div className="admin-maincontent">
      <h1>Admin</h1>
      <p>User needs to have a role set to admin in Firestore dB</p>
      <p>User also needs to be signed in.</p>

      <section className="admin-users">
        {props.users.map((itm, idx) => (
          <ul key={idx}>
            <Card>
              <CardContent>
                <li>Username: {itm.username}</li>
                <li>Email: {itm.email}</li>
                <li>UID: {itm.uid}</li>
                <li>
                  Email verified: {itm.emailVerified ? "Yes" : "No"}
                </li>
                <li>Last signed: {itm.lastSignedIn}</li>
                <li>Created: {itm.created}</li>
              </CardContent>
            </Card>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default withLoading(AdminMain);
