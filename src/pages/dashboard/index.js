import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// comps
import DashboardMainContent from "./DashboardMainContent";
import DashboardSideCol from "./DashboardSideCol";
import { desktopAnimation } from "./DashboardAnimation";
// main-content Accordion data
import Accordion from "../../components/Accordion";
import accordionData from "../../components/Accordion/data";
// sidelinks & title & subtitle
import * as db from "../../helpers/constants";
import Loading from "../../components/Loading";

// styles
import "./styles.scss";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      //forced timeout
      this.setState({ loading: false });
    }, 1500);
    const heading = this.heading;
    const sideCol = this.sideCol;
    const ele = this.ele;
    desktopAnimation(heading, sideCol, ele);
  }

  handleClick = e => e.preventDefault();

  componentWillUnmount() {
    //remove timeout
    clearTimeout(this.timeout);
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="dp-landwrapper">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div ref={heading => (this.heading = heading)}>
              <header>
                <h1>{db.title}</h1>
                <p>{db.substitle}</p>
              </header>
            </div>
          </Grid>

          {loading ? (
            <Loading />
          ) : (
            <div className="dp-land-inner">
              <section>
                <Grid item xs={12} md={12} lg={2}>
                  <div ref={sideCol => (this.sideCol = sideCol)}>
                    <DashboardSideCol
                      side1={db.side1}
                      side2={db.side2}
                      side3={db.side3}
                      side4={db.side4}
                      handleClick={this.handleClick}
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={12} lg={10}>
                  <div ref={ele => (this.ele = ele)}>
                    <DashboardMainContent
                      item={Accordion}
                      items={accordionData}
                    />
                  </div>
                </Grid>
              </section>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default DashboardPage;
