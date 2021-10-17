import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Segment } from 'semantic-ui-react'


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
        <Segment>
        <Slider {...settings}>
          <div>
            <img src="https://www.simplyrecipes.com/thmb/tCR7xB9dK61aTKz6Me6uqxi2Tm4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tapioca-Pudding-LEAD-1-9fc50466fd33411eb56e9362f243362a.jpg" width="1400" height="500" alt="background" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKloT371IhX3ovRI5eng_Ne2sPh4hylnDqQ&usqp=CAU" width="1400" height="500" alt="background" />
          </div>
          <div>
            <img src="https://img2.baidu.com/it/u=1371190817,2531577745&fm=26&fmt=auto" width="1400" height="500" alt="background"/>
          </div>
          <div>
            <img src="https://img1.baidu.com/it/u=231090709,1086113940&fm=26&fmt=auto" width="1400" height="500" alt="background" />
          </div>
      

        </Slider>
        </Segment>
      </div>
    );
  }
}

