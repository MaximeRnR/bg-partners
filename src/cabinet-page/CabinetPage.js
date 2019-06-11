import React, {Component} from 'react';
import './CabinetPage.css';
import Wallpaper from "../assets/img/city-greyscale-wallpaper.jpg";
import GoodTeam from "../assets/img/undraw_good_team.svg";
import Marketing from "../assets/img/undraw_marketing.svg";
import SpreadLove from "../assets/img/undraw_spread_love_.svg";
import StepToTheSun from "../assets/img/undraw_step_to_the_sun.svg";
import HavingFun from "../assets/img/undraw_having_fun_.svg";
import WorkOut from "../assets/img/undraw_working_out.svg";
import Business from "../assets/img/undraw_business_analytics.svg";
import International from "../assets/img/undraw_around_the_world.svg";

class CabinetPage extends Component {

   componentDidMount() {
      window.scrollTo(0, 0);

      if(document.querySelector(".hamburger").classList.contains("open")){
         document.querySelectorAll(".animate-path")[0].click()
      }
   }

   render() {
      return (
         <div className="cabinet-page">

            <div className="background-img">
               <img className="splash" src={Wallpaper}/>
            </div>
            <div className="first-container container">
               <h2 className="title">Le cabinet</h2>
               <div className="cabinet-page-wrapper">
                  <img className="cabinet-page-image" src={Marketing}/>
                  <div className="content">
                     <span>BG Partners est un cabinet de <b>conseil</b> en <b>management</b> spécialisé dans l’<b>accompagnement</b> de grands programmes de transformation au digital, la croissance des entreprises et leur évolution.<br/>
Notre cabinet BG Partners est créé en Mai 2016 par les deux associés Monsieur El Mehdi BOUJELLAL et Monsieur Julien GEROMETTA.</span>
                  </div>
               </div>
            </div>
            <h2 className="our-cabinet">Notre cabinet c'est : </h2>
            <div className="second-container container">
               <img className="cabinet-page-image" src={GoodTeam}/>
               <h2 className="subtitle">Une équipe passionnée par le conseil </h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Nos associés disposent chacun de <b>15</b> années d’expérience dans la conduite de projets de transformation à forts enjeux.<br/>
Notre équipe est mixte : plus de la moitié de nos consultants internes sont des femmes.<br/>
Nos profils sont également distincts : qu’ils soient diplômés d’une école de commerce ou d’une école d’ingénieur, nous avons tous la même envie commune : conseiller et accompagner nos clients dans la réalisation de leur nouveaux objectifs stratégiques.</span>
                  </div>
               </div>
            </div>
            <div className="third-container container">
               <img className="cabinet-page-image" src={SpreadLove}/>
               <h2 className="subtitle">La satisfaction client</h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Etant une société à taille humaine, nous mettons le client au centre de notre démarche d’accompagnement. Nos consultants s’engagent pleinement pour que le client soit satisfait et obtiennent les résultats attendus.
Notre volonté est la satisfaction de nos clients sur la qualité professionnelle et humaine de nos consultants</span>
                  </div>
               </div>
            </div>

            <div className="fourth-container container">
               <img className="cabinet-page-image" src={StepToTheSun}/>
               <h2 className="subtitle">La création de valeur et une certaine agilité</h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Notre cabinet recherche systématiquement à créer la plus grande valeur pour ses clients. Les démarches menées sont orientées résultats avec une forte implication dans le contexte client.<br/>
Nos consultants d’adaptent aux différents contextes et demandes clients en s’appuyant sur des partenaires experts.</span>
                  </div>
               </div>
            </div>

            <div className="fifth-container container">
               <img className="cabinet-page-image" src={HavingFun}/>
               <h2 className="subtitle">Humain</h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>C’est en connaissant mieux nos consultants que nous pouvons mieux leur proposer les missions qui leur conviennent le mieux.<br/>
Nous favorisons des missions qui s’inscrivent dans la durée avec des clients que nous connaissons et avec lesquels nous construisons des relations fortes.<br/>
Nous sommes un cabinet à taille humaine, ce qui nous permet de suivre le bon déroulement de la mission.<br/>
Nous veillons à l’épanouissement professionnel de nos consultants. Nous prenons toutes les dispositions possibles pour que le travail ne puisse pas venir perturber leurs équilibres dans leurs vies personnelles.<br/>
Le respect de la vie privée des consultants fait partie d’un des piliers de notre cabinet.<br/></span>
                  </div>
               </div>
            </div>

            <div className="sixth-container container">
               <img className="cabinet-page-image" src={WorkOut}/>
               <h2 className="subtitle">Accompagnements</h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Nous accordons une grande importance à l’accompagnement de nos clients et de nos consultants.
Notre proximité avec nos clients et nos consultants leur permettent de nous faire confiance. Nous travaillons ensemble et nous sommes disponibles à tout moment.
Nous prônons une relation simple, authentique et efficace.</span>
                  </div>
               </div>
            </div>

            <div className="seventh-container container">
               <img className="cabinet-page-image" src={Business}/>
               <h2 className="subtitle">L’Entreprenariat</h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Notre cabinet est né de 2 entrepreneurs qui souhaitent promouvoir cette valeur dans son action au quotidien, que ce soit sur les missions ou dans les démarches internes au cabinet.</span>
                  </div>
               </div>
            </div>
            <div className="eighth-container container">
               <img className="cabinet-page-image" src={International}/>
               <h2 className="subtitle">L’International </h2>
               <div className="cabinet-page-wrapper">
                  <div className="content">
                     <span>Notre cabinet accompagne des clients à l’international et a des consultants en mission dans plusieurs pays pour être au plus proche des problématiques client.</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default CabinetPage;
