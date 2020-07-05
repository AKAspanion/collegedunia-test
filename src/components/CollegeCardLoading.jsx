import React from "react";

import "./CollegeCard.css";

export default function CollegeCardLoading() {
  return (
    <div className="college-card__loading-wrapper">
      <div className="college-card__loading loading-image" />
      <div className="college-card__loading-text">
        <div className="college-card__loading loading-title" />
        <div className="college-card__loading loading-subtitle" />
        <div className="college-card__loading loading-subtitle" />
        <div className="college-card__loading loading-ribbon" />
      </div>
    </div>
  );
}
