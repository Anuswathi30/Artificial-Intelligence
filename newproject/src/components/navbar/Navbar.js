import React from 'react'
 import {Link} from 'react-router-dom';
 import Home from "../../Pages/Home/Home"
 import Contact from "../../Pages/contact/contact"
 import Training from "../../Pages/Training/Training"
 import './Navbar.css' 
 import {FaTimes,FaBars} from "react-icons/fa"
 import{useState} from "react";
 

const Navbar = () => {
  const [click ,setClick] = useState(false)


const handleClick =()=> {
  setClick(!click)
}

  return (
    <nav>
    <div className="logo">
      <h1>INKPROG</h1>
    </div>
    <div className={ click ?"menu active":"menu"}>
       <Link to = "/">Home</Link>
       <Link to ="/Training">Training</Link>
       <Link to ="/Contact">Contact</Link>
    </div>

    <div className='hamburger' onClick={handleClick}>
      {click ?(
        <FaTimes style={{color :"white"}}size={25}/>
      ):(
      <FaBars  style={{color:"white"}} size={25}/>
      )}
    </div>
    </nav>

  )
}

export default Navbar