import React from 'react';
import './Presentacion.css';

export const Presentacion = () => {
  return (
    <div className='Presentacion'>
        <div className='Nombre'>
            <h2>Benjamin Carias</h2>
            <p>Frontend Developer</p>
            <a href='#Presentacion'>Sobre mi</a>
        </div>

        <div className='imagen-secundaria'>
            <img src='../../Assets/Imagen-Secundaria.png' alt='imagen-secundaria'/>
        </div>
    </div>
  )
}
