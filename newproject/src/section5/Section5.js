import React from 'react'
import {useState} from 'react'
import './Section5.css'



const Section5 = () => {
    const [selected, setSelected] = useState(null)
	const toggle = (i) => {
		if (selected === i){
			return setSelected(null)
		}
		setSelected(i)
    }
    
	return (
		<div className='faq'>
			<h1>FAQS</h1>
			
				<div className='accordion'>
					{data.map((item, i) => (
						<div className="item">
							<div className="title" onClick={() =>toggle(i)}>
								<h2>{item.question}</h2>
								<span id="symbol">{selected === i ? '-' : '+'}</span>
							</div>
							<div className={selected === i ? 'content show' : 'content'}>
								{item.answers}
							</div>
						</div>

					))}
			</div>
			</div>
			)		
}
		        

	const data =[
		{
			question:"1. What is an AI?",
			answers:"AI is an Artificial intelligence. it is computer science technology that emphasizes creating intelligent machine that can mimic human behavior. Here Intelligent machines can be defined as the machine that can behave like a human, think like a human, and also capable of decision making. It is made up of two words, 'Artificial' and 'Intelligence,' which means the 'man-made thinking ability.",
		},
		{
			question:"2. Why do we need AI?",
			answers:"The goal of Artificial intelligence is to create intelligent machines that can mimic human behavior. We need AI for today's world to solve complex problems, make our lives more smoothly by automating the routine work, saving the manpower, and to perform many more other tasks.",
			
		},
		{
			question:"3. How is ML related to AI?",
			answers:"Machine learning is a subset or subfield of Artificial intelligence. It is a way of achieving AI. As both are the two different concepts and the relation between both can be understood as 'AI uses different Machine learning algorithms and concepts to solve the complex problems.'",
		},
		
	];


  


export default Section5