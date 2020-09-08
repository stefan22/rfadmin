import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// comps
import Accordion from "../../components/Accordion";
import accordionData from "../../components/Accordion/data";
import { desktopAnimation } from "./DashboardAnimation";
// hoc
import List from "../../helpers/List";
// styles
import "./styles.scss";

const initialState = {
  ready: false,
  user: null,
};

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef(null);
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
                <h1>Dashboard</h1>
                <p>
                  Landing page open to signed and non-signed-in users
                  alike
                </p>
              </header>
            </div>
          </Grid>

          <div className="dp-land-inner">
            <section>
              <Grid item xs={12} md={12} lg={2}>
                <nav ref={sideCol => (this.sideCol = sideCol)}>
                  <ul onClick={this.handleClick}>
                    <li>
                      <a href="#one">Protected pages</a>
                    </li>
                    <li>
                      <a href="#two">Section 2</a>
                    </li>
                    <li>
                      <a href="#three">Section 3</a>
                    </li>
                    <li>
                      <a href="#four">Section 4</a>
                    </li>
                  </ul>
                </nav>
              </Grid>

              <Grid item xs={12} md={12} lg={10}>
                <article>
                  <h2>About this App</h2>
                  <div
                    ref={this.titleRef}
                    className="article-inner-wrapper"
                  >
                    <section className="dp-accordion-section">
                      <div className="dp-accordionlist">
                        <div ref={ele => (this.ele = ele)}>
                          <List
                            item={Accordion}
                            items={accordionData}
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </article>
              </Grid>
            </section>
          </div>
        </Grid>
      </div>
    );
  }
}

export default DashboardPage;
