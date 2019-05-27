import React, {Component} from "react";
import "./BurgerMenu.css";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowScrolled: false,
      isBurgerActive: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickForBurger = this.handleClickForBurger.bind(this);
  }

  render() {
    const burgerState = this.state.isBurgerActive ? "open" : "closed";
    const scrolledBurgerClasses = this.state.isWindowScrolled ? "burger-grey" :  "burger-white";
    return (
        <div className="burger-container">
          <div className={"hamburger " + burgerState}>
            <div className="burger-main">
              <div className="burger-inner">
                <span className={scrolledBurgerClasses + " top"}/>
                <span className={scrolledBurgerClasses + " mid"}/>
                <span className={scrolledBurgerClasses + " bot"}/>
              </div>
            </div>
            <div className="svg-main">
            </div>
            <div className="path-burger">
              <div className="animate-path" onClick={this.handleClickForBurger}>
                <div className="path-rotation"/>
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
    this.setState({isWindowScrolled: scrollTop > 150});
  }

  handleClickForBurger() {
     this.setState({isBurgerActive: !this.state.isBurgerActive});
     document.getElementsByClassName("side-nav-container")[0].style.left = this.state.isBurgerActive ? "-80%" : "0";
     if(!this.state.isWindowScrolled && window.innerWidth < 600){
        document.querySelector(".presentation-container *").style.opacity = this.state.isBurgerActive ? "1" : "0";
     }

  }
}

export default BurgerMenu;
