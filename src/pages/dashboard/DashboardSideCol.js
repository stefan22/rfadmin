import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DashboardSideCol = ({
  handleClick,
  sides,
  className = "sidebar",
}) => (
  <Card>
    <CardContent>
      <nav>
        <ul className={className} onClick={handleClick}>
          {sides.map((itm, idx) => (
            <li key={idx}>
              <a href={`#${itm.to}`}>{itm.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </CardContent>
  </Card>
);

export default DashboardSideCol;
