import React, {Component} from 'react';
import './TermsAndConditions.css';

class TermsAndConditions extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="terms-and-conditions">
        <div className="background-img"/>
        <div className="container">
          <h2 className="title">Mentions Légales</h2>
          <div className="content">
            <ul>
              <li>Société :
                <ul>
                  <li> Raison Social :</li>
                  <li> Forme Juridique : </li>
                  <li> Siège social : </li>
                  <li> Capital Social : </li>
                </ul>
              </li>
              <li>Adresse Mail : </li>
              <li>Téléphone : </li>
              <li>Numéro d'inscription au registre du commerce et des sociétes (RCS) : </li>
              <li>Numéro de TVA intracommunautaire</li>
              <li>Directeur : </li>
              <li>Hébergeur :
                <ul>
                  <li> Raison Social :</li>
                  <li> Forme Juridique : </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsAndConditions;
