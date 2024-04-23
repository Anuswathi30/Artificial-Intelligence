import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img6 from '../../src/components/assets/slider1.jpg'
import img7 from '../../src/components/assets/slider2.gif'
import img8 from '../../src/components/assets/slider3.gif'
import img9 from '../../src/components/assets/slider4.webp'
import img10 from '../../src/components/assets/slider5.jpg'
import img11 from '../../src/components/assets/slider6.jpg'
import img12 from '../../src/components/assets/slider7.jpg'
import img13 from '../../src/components/assets/slider8.webp'
import img14 from '../../src/components/assets/slider9.jpg'
import './Section4.css'


const Section4 = () => {

  const images =[ img6,img7,img8,img9,img10,img11,img12,img13,img14]
  

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className='section4'>
       <h1>Services</h1>
    <Slider {...settings}>
    {images.map((image)=>{
      return(
        <div  key={image}>
          <img src={image} alt="" />
        </div>
      );



     })}

 {/* { 
       <div>
        <img src= {img6} alt="" />
      </div>
      <div>
        <img src={img7} alt="" />
      </div>
      <div>
        <img src={img8} alt="" />
      </div>
      <div>
        <img src={img9} alt="" />
      </div>
      <div>
        <img src={img10} alt="" />
      </div>
      <div>
        <img src={img11} alt="" />
      </div>
      <div>
        <img src={img12} alt="" />
      </div>
      <div>
        <img src={img13} alt="" />
      </div>
      <div>
        <img src={img14} alt="" />
       </div> } */} 
    </Slider>

  </div>
  );
};
  
  


export default Section4