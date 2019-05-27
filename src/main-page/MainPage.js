import React, {Component} from 'react';
import Splash from "../splash/Splash";
import Presentation from "../presentation/Presentation";
import Cabinet from "../Cabinet/Cabinet";

class MainPage extends Component {
   render() {
      return (
         <div className="mainPage">
            <Splash/>
            <Presentation/>
            <Cabinet/>
         </div>
      );
   }
}

export default MainPage;
