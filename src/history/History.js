import React, {Component} from 'react';
import './History.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Brainstorm from '../assets/img/undraw_brainstorm.svg';
import Multitask from '../assets/img/undraw_multitask.svg';



class History extends Component {
   render() {
      return (
         <div className="history">
            <div className="timeline-title"><h1> BG-Partners c'est</h1> </div>
            <VerticalTimeline>
               <VerticalTimelineElement
                  date="2017"
                  iconStyle={{ background: 'rgb(243, 140, 52)', color: '#fff' }}
                  icon={<StartUpIcon/>}
               >
                  <h3 className="vertical-timeline-element-title">Creation</h3>
                  <p>
                     Quondam uxori penetrali vatibus imperator secreto susurrasset ministro ideoque etiam.
                  </p>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  date="2018"
                  iconStyle={{ background: 'rgb(243, 140, 52)', color: '#fff' }}
                  icon={<BrainIcon/>}
               >
                  <h3 className="vertical-timeline-element-title">Brainstorm</h3>
                  <img className="image-element" src={Brainstorm} alt="Working"/>
               </VerticalTimelineElement>
               <VerticalTimelineElement
                  date="now"
                  iconStyle={{ background: 'rgb(243, 140, 52)', color: '#fff' }}
                  icon={<NowIcon/>}
               >
                  <h3 className="vertical-timeline-element-title">Now</h3>
                  <img className="image-element" src={Multitask} alt="Working"/>
               </VerticalTimelineElement>
            </VerticalTimeline>
         </div>
      );
   }
}

export default History;

function StartUpIcon() {
   return <i className="fas fa-rocket"></i>
}

function BrainIcon() {
   return <i className="fas fa-brain"></i>
}

function NowIcon() {
   return <i className="fas fa-briefcase"></i>
}
