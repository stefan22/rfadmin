import React from "react";
// hoc
import List from "../../helpers/List";
import Accordion from "../../components/Accordion";
import accordionData from "../../components/Accordion/data";

const DashboardMainContent = () => (
  <article>
    <h2>About this App</h2>
    <div className="article-inner-wrapper">
      <section className="dp-accordion-section">
        <div className="dp-accordionlist">
          <List item={Accordion} items={accordionData} />
        </div>
      </section>
    </div>
  </article>
);

export default DashboardMainContent;
