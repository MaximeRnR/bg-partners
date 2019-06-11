import React from 'react';
import './Presentation.css'
import Image from '../assets/img/undraw_knowledge.svg'


export default function Presentation() {
   return (
      <div className="presentation-container">
         <img className="image" src={Image}/>
         <span className="punchline"><b>Résultat, Pragmatisme, Valeur, Bienveillance. </b>
Un cabinet de conseil de référence en stratégie opérationnelle, spécialisé en pilotage de grands programmes de transformation.
</span>
      </div>
   );
}
