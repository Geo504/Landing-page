import React from "react";

import './CardStyle.css'


export const Card = ({ imageName, title, text }) => {
  return (
    <div className="card g-col-12 g-col-sm-6 g-col-lg-3 text-center bg-body-tertiary divCard">
      <img
        className="card-img-top"
        src={imageName}
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title">{title}</h4>
        <p className="card-text pCardText">{text}</p>
        <div>
          <a href="#" className="btn btn-dark">
            View more!
          </a>
        </div>
      </div>
    </div>
  );
};
//
