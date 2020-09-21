import React from "react";

const DashboardSideCol = ({
  handleClick,
  sides,
  className = "sidebar",
}) => (
  <nav>
    <ul className={className} onClick={handleClick}>
      {sides.map((itm, idx) => (
        <li key={idx}>
          <a href={`#${itm.to}`}>{itm.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default DashboardSideCol;
