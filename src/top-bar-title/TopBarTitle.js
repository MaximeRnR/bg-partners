import React, {Component} from "react";
import "./TopBarTitle.css";
import TitleBlanc from '../assets/img/logo-blanc.png';
import TitleNoir from '../assets/img/logo-noir.png';
import {Link} from "react-router-dom";
import BurgerMenu from "./burger-menu/BurgerMenu";
import SideNav from "./side-nav/SideNav";

class TopBarTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowScrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  render() {
    const scrolledTopBarClasses = this.state.isWindowScrolled ? "scrolled" : "not-scrolled";
    const title = this.state.isWindowScrolled ? TitleNoir : TitleBlanc;
    return (
      <div className={`top-bar ${scrolledTopBarClasses}`}>
        <SideNav/>
        <div className="bloc">
          <BurgerMenu/>
          <div className="logo-slogan-container">
            <div className="logo-container">
              <Link to={'/'}>
                <img src={title} className="logo" alt="titre"/>
              </Link>
            </div>
            <div className="slogan-container">
              <span className="slogan"> Parternaires Particuliers</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollTop = document.documentElement.scrollTop;
    this.setState({isWindowScrolled: scrollTop > 100});
  }
}

export default TopBarTitle;
