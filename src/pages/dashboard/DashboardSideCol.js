import React from "react";
import {
  dbSide1,
  dbSide2,
  dbSide3,
  dbSide4,
} from "../../helpers/constants";

const DashboardSideCol = ({ handleClick }) => (
  <nav>
    <ul onClick={handleClick}>
      <li>
        <a href="#one">{dbSide1}</a>
      </li>
      <li>
        <a href="#two">{dbSide2}</a>
      </li>
      <li>
        <a href="#three">{dbSide3}</a>
      </li>
      <li>
        <a href="#four">{dbSide4}</a>
      </li>
    </ul>
  </nav>
);

export default DashboardSideCol;
