import React from 'react'
 import './Section3.css'
 import img5 from '../../src/components/assets/inside_the_blockchain.gif'
 import backgroundImage from '../../src/components/assets/article.gif'
 

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='a'> 
       <h1> HISTORY OF AI</h1>
       <img src={img5} alt="" />
      </div>
      <div className='b'>
       <h1>A brief history of artificial intelligence</h1>
       <p> Before 1949, computers could execute commands, but they could not remember what they did as they were not able  
       to store these commands.  In 1950, Alan Turing discussed how to build intelligent machines and test this intelligence  in his paper “Computing Machinery and Intelligence”. 
       Five years later, the first AI program was presented at the  
       Dartmouth Summer Research Project on Artificial Intelligence (DSPRAI). This event was the catalyst for AI research  
       for the next few decades.  Computers became faster, cheaper and more accessible between 1957 and 1974.  Machine learning algorithms improved and, in 1970, one of the hosts of DSPRAI told Life Magazine that there would be a  
       machine  with the general intelligence of an average human being in three to eight years. </p>
      </div>
    </div>
  )
}

export default Section3