import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// comps
import DashboardMainContent from "./DashboardMainContent";
import DashboardSideCol from "./DashboardSideCol";
import { desktopAnimation } from "./DashboardAnimation";

import * as db  from "../../helpers/constants";

// styles
import "./styles.scss";

const initialState = {
  ready: false,
  user: null,
};

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { initialState };
  }

  componentDidMount() {
    const heading = this.heading;
    const sideCol = this.sideCol;
    const ele = this.ele;
    desktopAnimation(heading, sideCol, ele);
  }

  handleClick = e => e.preventDefault();

  render() {
    return (
      <div className="dp-landwrapper">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div ref={heading => (this.heading = heading)}>
              <header>
                <h1>{db.dbtitle}</h1>
                <p>{db.dbsubstitle}</p>
              </header>
            </div>
          </Grid>

          <div className="dp-land-inner">
            <section>
              <Grid item xs={12} md={12} lg={2}>
                <div ref={sideCol => (this.sideCol = sideCol)}>
                  <DashboardSideCol handleClick={this.handleClick} />
                </div>
              </Grid>

              <Grid item xs={12} md={12} lg={10}>
                <div ref={ele => (this.ele = ele)}>
                  <DashboardMainContent />
                </div>
              </Grid>
            </section>
          </div>
        </Grid>
      </div>
    );
  }
}

export default DashboardPage;
