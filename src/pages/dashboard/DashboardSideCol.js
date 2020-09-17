import React from "react";
const DashboardSideCol = ({
  handleClick,
  side1,
  side2,
  side3,
  side4,
  className = "sidebar",
}) => (
  <nav>
    <ul className={className} onClick={handleClick}>
      <li>
        <a href="#one">{side1}</a>
      </li>
      <li>
        <a href="#two">{side2}</a>
      </li>
      <li>
        <a href="#three">{side3}</a>
      </li>
      <li>
        <a href="#four">{side4}</a>
      </li>
    </ul>
  </nav>
);

export default DashboardSideCol;
