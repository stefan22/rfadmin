import React from "react";
// hoc
import List from "../../helpers/List";

const DashboardMainContent = ({ item, items }) => (
  <article>
    <h2>About this App</h2>
    <div className="article-inner-wrapper">
      <section className="dp-accordion-section">
        <div className="dp-accordionlist">
          <List item={item} items={items} />
        </div>
      </section>
    </div>
  </article>
);

export default DashboardMainContent;
