import React from 'react';
import './Cabinet.css'
import Image from '../assets/img/undraw_predictive_analytics_kf9n.svg'
import Background from '../assets/img/city-greyscale-wallpaper.jpg'


export default function Cabinet() {
  return (
    <div className="cabinet-container">
      <div className="cabinet-frame">
        <h1> Notre Cabinet </h1>
        <img className="image" src={Image}/>
        <div className="cabinet-description">
          <span> Notre Cabinet BG Partners est une société de conseil en management spécialisée dans l'<b>accompagnement</b> de grands programmes de transformation au digital.</span>
          <span> La croissance des entreprises et leur évolution.</span>
        </div>
      </div>
      <div className="cabinet-frame cards-container">
        <div className="cabinet-card">
          <div className="text">
            <span><b>Performance et Qualité</b></span>
          </div>
          <img className="card-bg" src={Background}/>
        </div>
        <div className="cabinet-card">
          <div className="text">
            <span><b> Simplicité, Authenticité, Proximité, Engagement</b></span>
          </div>
          <img className="card-bg" src={Background}/>
        </div>
        <div className="cabinet-card">
          <div className="text">
            <span><b>Pragmatisme, Valeur, Catalyseur</b></span>
          </div>
          <img className="card-bg" src={Background}/>
        </div>
      </div>
    </div>
  );
}
