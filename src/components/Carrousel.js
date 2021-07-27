import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default class Carrousel extends Component {
  render() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }


    return (
      <div>
        <h2>The dishes</h2>
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
          <div>
            <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
          <div>
            <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
          <div>
            <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
          <div>
            <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
          <div>
          <img src="https://picsum.photos/1600/500" alt="background" />
          </div>
        </Slider>
      </div>
    );
  }
}