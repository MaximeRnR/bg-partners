import React from 'react';
import './Presentation.css'
import Image from '../assets/img/undraw_knowledge.svg'


export default function Presentation() {
   return (
      <div className="presentation-container">
         <img className="image" src={Image}/>
         <span className="punchline"><b>Et alienos est memoriam</b> diligamus eos non oderit alterum viderit.</span>
      </div>
   );
}
