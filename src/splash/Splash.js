import React from 'react';
import './Splash.css';
import Wallpaper from '../assets/img/city-greyscale-wallpaper.jpg';

export default function Splash() {
   return (
      <div className="splash-container">
            <img className="splash" src={Wallpaper}/>
      </div>
   );
}
