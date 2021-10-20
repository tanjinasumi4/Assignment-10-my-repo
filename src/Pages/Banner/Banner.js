import React from 'react';
import { Carousel } from 'react-bootstrap';
import baner1 from '../../images/banner/banner1.jpg'
import baner2 from '../../images/banner/banner3.jpg'
import baner3 from '../../images/banner/banner4.jpg'

const Banner = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item>
    <img
      className=" img-fluid w-50"
      src={baner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Your Health is our Priority</h3>
      <p>Search the best treatment of your health</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" img-fluid w-50"
      src={baner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>A team of experts on your side</h3>
      <p>We are always there with you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" img-fluid w-50 "
      src={baner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We care about ypur health</h3>
      <p>You can find us at any moment because we care you</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;