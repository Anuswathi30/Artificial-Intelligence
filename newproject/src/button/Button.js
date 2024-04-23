import React, { useState } from "react";
import img2 from '../../src/components/assets/facescan.gif'
import img3 from '../../src/components/assets/faceman.gif'
import './Button.css'

const Button = () => {
  const [state, setState] = useState(false);
  const [text, setText]=useState('Face Recognition')

  const toggleImage = ()=>{
    setState(!state)
   setText(state? 'Face Recognition':'Done')
  }
  return (
    <div className="one">
      <h1>ARTIFICIAL INTELLIGENCE</h1>
      {
        state ?(
              <img  id=" pic2" src={img3} alt="img"  />
        ):(<img  id="pic1" src={img2} alt=""  />)
      }
      <button onClick={toggleImage}>{text}
      {/* {state? img2:img3} */}
      </button>

     
    </div>
  );
};

export default Button;
