import React, {Component} from 'react';
import './CabinetPage.css';
import Wallpaper from "../assets/img/city-greyscale-wallpaper.jpg";
import GoodTeam from "../assets/img/undraw_good_team.svg";

class CabinetPage extends Component {

   componentDidMount() {
      window.scrollTo(0, 0);
   }

   render() {
      return (
         <div className="cabinet-page">
            <div className="container">
               <h2 className="title">Le cabinet</h2>
               <div className="cabinet-page-wrapper">
                  <div className="cabinet-page-image"><img src={GoodTeam}/></div>
                  <div className="content">
                  <span>BG Partners est un cabinet de conseil en management spécialisé dans l’accompagnement de grands programmes de transformation au digital, la croissance des entreprises et leur évolution
Notre cabinet BG Partners est créé en Mai 2016 par les deux associés Monsieur El Mehdi BOUJELLAL et Monsieur Julien GEROMETTA.</span>
                  </div>
               </div>
            </div>
            <div className="background-img">
               <img className="splash" src={Wallpaper}/>
            </div>
         </div>
      );
   }
}

export default CabinetPage;
