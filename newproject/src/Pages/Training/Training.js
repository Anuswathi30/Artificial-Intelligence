import React from 'react'
import './training.css'
import pic1 from '../../components/assets/t1.gif'
import pic2 from '../../components/assets/manage-the-risks.gif'
import pic3 from '../../components/assets/t5.gif'
import pic4 from '../../components/assets/slider3.gif'
import pic5 from '../../components/assets/t2.gif'
import pic6 from '../../components/assets/t29.gif'
import pic7 from '../../components/assets/t6.gif'
import pic8 from '../../components/assets/t12.gif'
import backimg from '../../components/assets/t8.gif'
import Video from '../../../src/video/Video'

const Training = () => {
  return (
    <>
 <div className='main'>
      <h1>Training</h1>
      <div className='imgsection'>
      <div className='imgpart1'>
        <img id="pic-class" src={pic1} alt="" />
        <h2>figure-1</h2>
        <img   id="pic-class"src={pic2} alt="" />
        <h2>figure-2</h2>
        <img  id="pic-class" src={pic3} alt="" />
        <h2>figure-3</h2>
        <img  id="pic-class" src={pic4} alt="" />
        <h2>figure-4</h2>
      </div>
      <div className='imgpart2'>
      <img  id="pic-class" src={pic5} alt="" />
      <h2>figure-5</h2>
      <img   id="pic-class"src={pic6} alt="" />
      <h2>figure-6</h2>
      <img id="pic-class" src={pic7} alt="" />
      <h2>figure-7</h2>
      <img id="pic-class" src={pic8} alt="" />
      <h2>figure-8</h2>
      </div>
      </div>
   </div>
     <Video/>
   </>
  )
}

export default Training