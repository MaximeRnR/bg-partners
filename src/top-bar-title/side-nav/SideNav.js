import React, {Component} from "react";
import "./SideNav.css";
import { MdSlideshow, MdGroup, MdSms, MdInsertChart } from 'react-icons/md'

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
            <div className="icon"><MdSlideshow/></div>
            <div>&nbsp;</div>
            <a href="#presentation" className="side-nav-item">Présentation</a>
          </div>
          <div className="side-nav-list-el spacer"/>
          <div className="side-nav-list-el">
            <div className="icon"><MdInsertChart/></div>
            <div>&nbsp;</div>
            <a href="#status">Constat</a>
          </div>
          <div className="side-nav-list-el spacer"/>
          <div className="side-nav-list-el">
            <div className="icon"><MdSms/></div>
            <div>&nbsp;</div>
            <a href="#solution">Solution</a>
          </div>
          <div className="side-nav-list-el spacer"/>
          <div className="side-nav-list-el">
            <div className="icon"><MdGroup/></div>
            <div>&nbsp;</div>
            <a href="#team">Equipe</a>
          </div>
        </div>
      </div>
    );
  }


}

export default SideNav;
