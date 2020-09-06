import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// comps
import Accordion from "../../components/Accordion";
// styles
import "./styles.scss";

import accordionData from "../../components/Accordion/data";

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
    e.preventDefault();
    Array.from(this.titleRef.current.children).forEach(
      itm => (itm.children[0].style.color = "inherit"),
    );

    //let tar = e.target.textContent.split("/")[0].toLowerCase();
    // this.titleRef.current.querySelector(
    //   `#page-${tar} h3`,
    // ).style.color = "red";
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
                    <section id="page-signin">
                      <h3>Protected:&not pages</h3>
                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[0].title}
                          content={accordionData[0].content}
                        />
                      </div>

                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[1].title}
                          content={accordionData[1].content}
                        />
                      </div>
                    </section>

                    <section id="page-signout">
                      <h3>Firebase Component</h3>
                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[2].title}
                          content={accordionData[2].content}
                        />
                      </div>
                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[3].title}
                          content={accordionData[3].content}
                        />
                      </div>
                    </section>

                    <section id="page-home">
                      <h3>Higher Order Components</h3>
                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[4].title}
                          content={accordionData[4].content}
                        />
                      </div>
                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[5].title}
                          content={accordionData[5].content}
                        />
                      </div>
                    </section>

                    <section id="page-admin">
                      <h3>Routes</h3>

                      <div className="dp-accordionlist">
                        <Accordion
                          title={accordionData[6].title}
                          content={accordionData[6].content}
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
