import React from 'react'
import img4 from '../../src/components/assets/AI_gif.gif'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='section2'>
        <img src={img4}alt="" />
           <div className='matter'>
            <h1>Introduction of AI</h1>
             <p>Artificial intelligence allows machines to replicate the capabilities of the human mind.  
                From the development of self-driving cars to the proliferation of smart assistants like Siri 
                and Alexa,<span></span> AI is a growing  part of everyday life.  As a result, many tech companies across various  
                 industries are investing in artificially intelligent technologies.</p>
             <h1>WHAT IS ARTIFICIAL INTELLIGENCE</h1>
             <p>Artificial intelligence is a wide-ranging branch of computer science concerned with building smart
                 <span></span> machines capable of performing tasks  that typically require human intelligence.</p>
                  </div>
     </div> 

    
  )
}

export default Section2