import React, {Component} from "react";
import "./SideNav.css";
import {MdBusinessCenter, MdContacts, MdFavorite, MdPeopleOutline} from "react-icons/md";

class SideNav extends Component {
  componentDidMount() {
    const svg = document.querySelectorAll(".icon svg");
    Array.from(svg).forEach(function (el) {
      el.style.width = "25px";
      el.style.height = "25px";
    })
  }

  render() {
    return (
      <div className="side-nav-container">
        <div className="side-nav-menu">
          <div className="side-nav-list-el">
            <div className="icon"><MdBusinessCenter/></div>
            <div>&nbsp;</div>
            <a href="" className="side-nav-item">Le Cabinet BG</a>
          </div>
          <div className="side-nav-list-el">
            <div className="icon"><MdFavorite/></div>
            <div>&nbsp;</div>
            <a href="">Notre Coeur de métier</a>
          </div>
          <div className="side-nav-list-el">
            <div className="icon"><MdPeopleOutline/></div>
            <div>&nbsp;</div>
            <a href="">Devenir un BG</a>
          </div>
           <div className="side-nav-list-el">
            <div className="icon"><MdContacts/></div>
            <div>&nbsp;</div>
            <a href="">Nous contacter</a>
          </div>
        </div>
      </div>
    );
  }


}

export default SideNav;
