import React from 'react'
import "./header.style.css"
export default function Headernav(props){
  return (
    <div className='header__nav'>
        <ul className='header__nav--list'>
           <li>Home</li>
           <li>Product</li>
           <li>Introduction</li>
           <li>Contact</li>
        </ul>
    </div>
  )
}
