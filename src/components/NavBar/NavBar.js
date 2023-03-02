import React from 'react';
import './NavBar.css';


export const NavBar = () => {
  return (
    <div className='Navbar'>
      <div className='div-imagen'>
        <img height={40} src='https://images.squarespace-cdn.com/content/v1/62d09f54a49d6f1c78455cce/67b9ee0c-7ccf-4cfd-8581-c50d5f62384a/T1_Logo_Primary+Red.png' alt='Logo' />
      </div>
      <ul class="menu">
        <li><a href="#logo">Inicio</a></li>
        <li><a href="#logo">Sobre mi</a></li>
        <li><a href="#logo">Projects</a></li>
        <li><a href="#logo">Contact</a></li>
      </ul>
    </div>
  )
}
