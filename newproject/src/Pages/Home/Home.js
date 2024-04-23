import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Section1 from'../../imageslider/Section1'
import Button from '../../button/Button'
import Section from '../../../src/section2/Section2'
import Section3 from '../../../src/section3/Section3'
import Section4 from '../../../src/section4/Section4'
import Section5 from '../../../src/section5/Section5'
import Footer from "../../../src/footer/Footer"

const Home = () => {


  return (
    <div>
      <Navbar/>
      <Section1/>
     <Button/>
     <Section/> 
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>
    </div>
  );

};
export default Home