import React, { createElement } from "react";

import "./CollegeList.css";
import { CardCollege } from "../components";

import { colleges } from "../assets/colleges.json";

function CollegeList() {
  return (
    <div className="college-list">
      <div className="college-list__title">Colleges in North India</div>
      <div className="college-list__items">
        {colleges.map((college, index) =>
          createElement(CardCollege, { key: index, ...college })
        )}
      </div>
    </div>
  );
}

export default CollegeList;
