import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopBarTitle from "./top-bar-title/TopBarTitle";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import TermsAndConditions from "./terms-and-conditions/TermsAndConditions";
import {configureAnchors} from 'react-scrollable-anchor'

configureAnchors({scrollDuration: 1000});

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <TopBarTitle/>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/terms-and-conditions' component={TermsAndConditions} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
