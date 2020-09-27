import React from "react";
// hoc
import List from "../../helpers/List";
import { withLoading } from "../../components/loading";

const DashboardMainContent = ({ item, items }) => (
  <article>
    <div className="article-inner-wrapper">
      <section className="dp-accordion-section">
        <div className="dp-accordionlist">
          <List item={item} items={items} />
        </div>
      </section>
    </div>
  </article>
);

export default withLoading(DashboardMainContent);
