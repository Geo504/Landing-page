import React from "react";

import './WelcomeStyle.css';

export const WelcomeMessage = ({title ,text, button='Call to Action!'}) => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active bg-img1">
          <div className="mask">
            <div>
              <h1 className="card-title text-black">{title}</h1>
              <p className="card-text text-black">
                {text}
              </p>
              <a href="#" className="btn btn-dark">
                {button}
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item bg-img2">
          <div className="mask">
            <div>
              <h1 className="card-title text-black">{title}</h1>
              <p className="card-text text-black">
                {text}
              </p>
              <a href="#" className="btn btn-dark">
                {button}
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item bg-img3">
          <div className="mask">
            <div>
              <h1 className="card-title text-black">{title}</h1>
              <p className="card-text text-black">
                {text}
              </p>
              <a href="#" className="btn btn-dark">
                {button}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};