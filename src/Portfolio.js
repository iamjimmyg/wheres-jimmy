import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'
import AOP from './portfolio/AOP'
import AOPInfo from './portfolio/AOPInfo'
import Bellawatt from './portfolio/Bellawatt'
import BellawattInfo from './portfolio/BellawattInfo'
import UtilityRadar from './portfolio/UtilityRadar'
import UtilityRadarInfo from './portfolio/UtilityRadarInfo'

import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


class Portfolio extends Component {
  constructor(props){
    super(props)
    // this.aop = <AOP />
    // this.aopInfo = <AOPInfo />
    // this.bellawatt = <Bellawatt />
    // this.bellawattInfo = <BellawattInfo />
    // this.utilityRadar = <UtilityRadar />
    // this.utilityRadarInfo = <UtilityRadarInfo />

    this.state = {
      title: <h1 className='invisible'>PORTFOLIO</h1>,
      // aop: <div className='invisible'>{this.aop}</div>,
      // aopInfo: <div className='invisible'>{this.aopInfo}</div>,
      // bellawatt: <div className='invisible'>{this.bellawatt}</div>,
      // bellawattInfo: <div className='invisible'>{this.bellawattInfo}</div>,
      // utilityRadar: <div className='invisible'>{this.utilityRadar}</div>,
      // utilityRadarInfo: <div className='invisible'>{this.utilityRadarInfo}</div>,
    }
    // this.handleAOP = this.handleAOP.bind(this)
    // this.handleAOPInfo = this.handleAOPInfo.bind(this)
    // this.handleBellawatt = this.handleBellawatt.bind(this)
    // this.handleBellawattInfo = this.handleBellawattInfo.bind(this)
    // this.handleUtilityRadar = this.handleUtilityRadar.bind(this)
    // this.handleUtilityRadarInfo = this.handleUtilityRadarInfo.bind(this)
  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}}>PORTFOLIO</h1>}
    </Motion>})
  }

  // handleAOP(){
  //   this.setState({ aop: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //     {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.aop}</div>}
  //   </Motion>})
  // }
  // handleAOPInfo(){
  //   // setTimeout(() => {
  //     this.setState({ aopInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //       {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.aopInfo}</div>}
  //     </Motion>})
  //   // },100)
  // }
  //
  // handleBellawatt(){
  //   this.setState({ bellawatt: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //     {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.bellawatt}</div>}
  //   </Motion>})
  // }
  // handleBellawattInfo(){
  //   // setTimeout(() => {
  //     this.setState({ bellawattInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //       {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.bellawattInfo}</div>}
  //     </Motion>})
  //   // },100)
  // }
  //
  // handleUtilityRadar(){
  //   this.setState({ utilityRadar: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //     {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.utilityRadar}</div>}
  //   </Motion>})
  // }
  // handleUtilityRadarInfo(){
  //   // setTimeout(() => {
  //     this.setState({ utilityRadarInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
  //       {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.utilityRadarInfo}</div>}
  //     </Motion>})
  //   // },100)
  // }

  render() {
    const icons = ['nnsa-icon','bellawatt-icon','utility-icon',]
    var settings = {
      customPaging: function(i) {
          return (
            <a className={i === 3 ? 'd-none' : ''}>
              <img className={icons[i]} src={`${icons[i]}.png`}/>
            </a>

          );
      },
      dotsClass: "slick-dots slick-thumb",
      dots: true,
      //infinite: true,
      //speed: 500,
      //slidesToShow: 1,
      //slidesToScroll: 1
    };

    return (
      <section className="" id='portfolio'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        <div className="projects container">
          <Slider  {...settings}>
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <AOP />

                </div>
                <div className="col-lg-6">
                  <AOPInfo/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-lg-6">
                  <Bellawatt />

                </div>
                <div className="col-lg-6">
                  <BellawattInfo/>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <UtilityRadar />

                </div>
                <div className="col-lg-6">
                  <UtilityRadarInfo/>
                </div>
              </div>
            </div>
            <div className='hidden-icon'></div>




           </Slider>
        </div>



      </section>
    );
  }
}

export default Portfolio;
