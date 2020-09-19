import React, { Component } from "react";
import loading from "../../images/load3.gif";
import "./styles.scss";

const withLoading = Component => ({ loading, ...rest }) => {
  return loading ? (
    <Loading loading={loading} />
  ) : (
    <Component {...rest} />
  );
};

class Loading extends Component {
  render() {
    return (
      <div className="loading-center">
        <section className="inner-loading">
          <img className="loading-img" src={loading} alt="Loading" />
          <h3 className="loading-heading">Loading show..</h3>
        </section>
      </div>
    );
  }
}

export { withLoading };
