import React, {Component} from "react";
import "./Footer.css";
import {Link} from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className='footer-container'>
          <div className="about">
            <div className="about-content">
              <h2>A Propos</h2>
              <div>
                Hajime est né fin 2017 de la rencontre entre deux domaines : la psychologie sociale et l’intelligence artificielle. En mettant en commun leurs compétences, l'équipe Hajime souhaite revisiter l'expérience patient en améliorant le suivi et la vie quotidienne des patients atteints de maladies chroniques. Nous pensons en effet que les sciences comportementales sont la clef de la médecine de demain.
              </div>
            </div>
          </div>
          <div className="mention-legal">
            <Link to={'/terms-and-conditions'}><h2>Mentions legales</h2></Link>
          </div>
          <div className="footer-social">
            <div className="social">
              <h2>Social Media</h2>
              <button className="icon-btn twitter" aria-label={"Lien twitter"}>
                <a className="link" aria-label={"Lien twitter"} href="https://twitter.com/" rel='noopener noreferrer' target="_blank">
                  <i className="fab fa-twitter"/>
                </a>
              </button>
              <button className="icon-btn facebook" aria-label={"Lien facebook"}>
                <a className="link" aria-label={"Lien facebook"} href="https://www.facebook.com/" rel='noopener noreferrer' target="_blank">
                  <i className="fab fa-facebook-f"/>
                </a>
              </button>
              <button className="icon-btn google-plus" aria-label={"Lien google plus"}>
                <a className="link" aria-label={"Lien google plus"} href="https://plus.google.com/" rel='noopener noreferrer' target="_blank">
                  <i className="fab fa-google-plus-g"/>
                </a>
              </button>
              <button className="icon-btn instagram" aria-label={"Lien instagram"}>
                <a className="link" aria-label={"Lien instagram"} href="https://www.instagram.com/" rel='noopener noreferrer' target="_blank">
                  <i className="fab fa-instagram"/>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2019 Bg-Partners. All Rights Reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
