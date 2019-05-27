import React from 'react';
import './Presentation.css'
import Image from '../assets/img/undraw_knowledge.svg'


export default function Presentation() {
   return (
      <div className="presentation-container">
         <img className="image" src={Image}/>
         <span className="punchline">Le <b>Cabinet de conseil </b> en stratégie opératoire à taille humaine, concentré de talents.</span>
      </div>
   );
}
