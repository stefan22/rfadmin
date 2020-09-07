import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// comps
import Accordion from "../../components/Accordion";
import accordionData from "../../components/Accordion/data";
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

  handleClick = e => {
    // nav column
    // not being used
    e.preventDefault();
    Array.from(this.titleRef.current.children).forEach(
      itm => (itm.children[0].style.color = "inherit"),
    );
  };

  render() {
    return (
      <div className="dp-landwrapper">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <header>
              <h1>Dashboard</h1>
              <p>
                Landing page open to signed and non-signed-in users
                alike
              </p>
            </header>
          </Grid>

          <div className="dp-land-inner">
            <section>
              <Grid item xs={12} md={12} lg={2}>
                <nav>
                  <ul onClick={this.handleClick}>
                    <li>
                      <a href="#page-protected">Protected pages</a>
                    </li>
                    <li>
                      <a href="#page-signout">Section 2</a>
                    </li>
                    <li>
                      <a href="#page-home">Section 3</a>
                    </li>
                    <li>
                      <a href="#page-admin">Section 4</a>
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
                        <List
                          item={Accordion}
                          items={accordionData}
                        />
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
