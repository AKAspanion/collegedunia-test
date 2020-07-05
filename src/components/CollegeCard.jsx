import React from "react";
import { mdiStar } from "@mdi/js";
import { Icon } from "@mdi/react";

import "./CollegeCard.css";

function CollegeCard({ detail, reference }) {
  const {
    tags,
    rating,
    ranking,
    promoted,
    amenties,
    discount,
    offertext,
    fees_cycle,
    college_name,
    nearest_place,
    original_fees,
    rating_remarks,
    discounted_fees,
    famous_nearest_places,
  } = detail;

  function getNearestFamous() {
    const matches = famous_nearest_places.match(/(\d+\.?\d*) *(kms?|Kms?)/g);
    return matches.reduce(
      (accumulator, value) =>
        accumulator.replace(
          value,
          `<span class="college-card__nearest--bold">${value}</span>`
        ),
      famous_nearest_places
    );
  }

  function getOffer() {
    const matches = offertext.match(/\d+(,\d+)*(\.\d*)?/g);
    return matches
      .reduce(
        (accumulator, value) =>
          accumulator.replace(
            value,
            `<span class="college-card__offer--green">${value}</span>`
          ),
        offertext
      )
      .replace("Flat", "<span class='college-card__offer--muted'>Flat</span>")
      .replace(
        "LOGIN",
        "<span class='college-card__offer--button'>LOGIN</span>"
      );
  }

  return (
    <div className="college-card" ref={reference}>
      <div className="college-card__image">
        <img alt="college" src="images/college_02.jpg" />
        <div className="college-card__tag-group">
          {tags.map((tag, i) => (
            <div key={i} className="college-card__tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="college-card__ranking">#{ranking}</div>
      </div>
      {promoted ? <div className="college-card__ribbon">promoted</div> : null}
      {promoted ? <div className="college-card__ribbon--shadow" /> : null}
      <div className="college-card__remarks">
        <div className="college-card__remarks__text">
          <div>
            <span className="college-card__remarks__text--bold">{rating}</span>
            /5
          </div>
          <div>{rating_remarks}</div>
        </div>
      </div>
      <div className="college-card__details">
        <div className="college-card__details__general">
          <div className="college-card__name">
            <span>{college_name}</span>
            <span className="college-card__star-group">
              {[...Array(5)].map((e, i) => (
                <Icon
                  color={i < rating ? "#444444" : "#adadad"}
                  path={mdiStar}
                  size={0.52}
                  key={i}
                />
              ))}
            </span>
          </div>
          <div className="college-card__nearest">
            <span className="college-card__nearest-bold">
              {nearest_place[0]}
            </span>
            <span className="college-card__nearest-muted">
              {" | "}
              {nearest_place[1]}
            </span>
          </div>
          <div className="college-card__nearest-famous">
            <span className="college-card__nearest-match">93% Match: </span>
            <span
              dangerouslySetInnerHTML={{ __html: getNearestFamous() }}
            ></span>
          </div>
          <div className="college-card__offer-ribbon">
            <span dangerouslySetInnerHTML={{ __html: getOffer() }}></span>
          </div>
        </div>
        <div className="college-card__details__price">
          <div className="college-card__discount-wrapper">
            <div className="college-card__original-fees">
              ₹{original_fees.toLocaleString()}
            </div>
            <div className="college-card__discount">
              {discount}
              <div className="college-card__discount-dot" />
            </div>
          </div>
          <div className="college-card__discount-fees">
            ₹{discounted_fees.toLocaleString()}
          </div>
          <div className="college-card__fees-cycle">{fees_cycle}</div>
          <div className="college-card__amenties">{amenties.join("  ·  ")}</div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <CollegeCard {...props} reference={ref} />
));
