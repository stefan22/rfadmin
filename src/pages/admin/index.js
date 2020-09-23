import React, { Component } from "react";
import { compose } from "recompose";
import { ADMIN } from "../../helpers/roles";
import { withAuthorization } from "../../components/Session";
import { withFirebase } from "../../components/Firebase";
import AdminMain from "./AdminMain";

const isAdmin = authUser =>
  !!authUser &&
  authUser.roles !== undefined &&
  authUser.roles[0] === ADMIN;

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: [],
    };
  }

  componentDidMount() {
    this.props.firebase
      .doGetUsers()
      .get()
      .then(qs => {
        const data = qs.docs.map(doc => doc.data());
        return this.setState({ users: data, loading: false });
      });
  }

  // componentWillUnmount() {
  //   this.props.firebase.doGetUsers().off();
  // }

  render() {
    return (
      <section className="admin-wrapper">
        {!!this.state.users && (
          <AdminMain
            loading={this.state.loading}
            users={this.state.users}
          />
        )}
      </section>
    );
  }
}
export default compose(
  withAuthorization(isAdmin),
  withFirebase,
)(AdminPage);
