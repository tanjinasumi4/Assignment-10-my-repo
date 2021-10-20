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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" img-fluid w-50"
      src={baner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" img-fluid w-50 "
      src={baner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;