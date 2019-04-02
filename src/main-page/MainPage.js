import React, {Component} from 'react';
import Splash from "../splash/Splash";
import Presentation from "../presentation/Presentation";

class MainPage extends Component {
   render() {
      return (
         <div className="mainPage">
            <Splash/>
            <Presentation/>
         </div>
      );
   }
}

export default MainPage;
