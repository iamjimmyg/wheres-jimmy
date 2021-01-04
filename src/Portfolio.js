import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

import Varuna from './portfolio/Varuna'
import VarunaInfo from './portfolio/VarunaInfo'

import Myproperties from './portfolio/Myproperties'
import MypropertiesInfo from './portfolio/MypropertiesInfo'
import AOP from './portfolio/AOP'
import AOPInfo from './portfolio/AOPInfo'
import Bellawatt from './portfolio/Bellawatt'
import BellawattInfo from './portfolio/BellawattInfo'
import UtilityRadar from './portfolio/UtilityRadar'
import UtilityRadarInfo from './portfolio/UtilityRadarInfo'
import ILJP from './portfolio/ILJP'
import ILJPInfo from './portfolio/ILJPInfo'

import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green", }}
      onClick={onClick}
    />
  );
}

class Portfolio extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: <h1 className='invisible'>PORTFOLIO</h1>,
      projectIndex: 0,
      firstProject: <div className='invisible'>
        <Varuna />
      </div>
    }

  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}}>PORTFOLIO</h1>}
    </Motion>})
  }

  handleFirstProject() {
    this.setState({ firstProject: <Motion defaultStyle={{x: 0, o: 0}} style={{x: spring(1), o: spring(1)}}>
      {value => <div style={{transform: `scale(${value.x, value.x})`, opacity: value.o}}><Varuna /></div>}
    </Motion>})
  }

  render() {
    var that = this
    const iconPosition = ['390px','210px', '30px', '-150px', '-330px']
    const icons = ['varuna-icon', 'myproperties-icon', 'nnsa-icon','bellawatt-icon']
    const iconName = ['Varuna', 'MyProperties', 'AOP', 'BELLAWATT', 'UTILITY RADAR' ]
    let rightArrowPointer = this.state.projectIndex === 0 ? 'none' : ''
    let leftArrowPointer = this.state.projectIndex === 3 ? 'none' : ''
    const settings = {
      customPaging: function(i) {
          let selectedIndex = i === that.state.projectIndex ? 'scale(1.1, 1.1)': ''
          let zIndex = i === that.state.projectIndex ? '10' : ''
          let border = i === that.state.projectIndex ? '1px solid yellow' : 'none'
          return (
            <a className={i === 4 ? 'd-none' : ''} >
              <div className='icon-box'
                style={{
                  transform: selectedIndex,
                  transition: '.3s ease-in-out',
                  position: 'relative',
                  zIndex: zIndex,
                }}>
                <img className={icons[i]} src={`${icons[i]}.png`}/>
                <hr className='hr'/>
                <p className='icon-name'>{iconName[i]}</p>
              </div>
            </a>

          );
      },
      appendDots: dots => (
        <div
          style={{
            left: iconPosition[this.state.projectIndex],
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      beforeChange: (old, newIndex) => {this.setState({projectIndex: newIndex})},
      dotsClass: "slick-dots slick-thumb",
      dots: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow/>
    };

    return (
      <section className="" id='portfolio'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        <div className='small-arrows'>
          <div className='small-icon-left d-lg-none' style={{ pointerEvents: rightArrowPointer, opacity: rightArrowPointer === 'none' ? '.4': '1' }}>
            <i  onClick={()=>this.slider.slickGoTo(this.state.projectIndex - 1)} className="material-icons left-arrow">chevron_left</i>
          </div>
          <div className='small-icon-right d-lg-none' style={{ pointerEvents: leftArrowPointer, opacity: leftArrowPointer === 'none' ? '.4': '1' }}>
            <i onClick={()=>this.slider.slickGoTo(this.state.projectIndex + 1)} className="material-icons right-arrow">chevron_right</i>
          </div>
        </div>

        <div className="projects">
          <Slider ref={slider=>(this.slider = slider)} {...settings}>
            <div className=''>
              <div className="row">
                <div className="col-lg-6">
                  <Waypoint onEnter={()=>{this.handleFirstProject()}}
                    bottomOffset='150px'
                  />
                  {this.state.firstProject}
                  {/* <AOP /> */}

                </div>
                <div className="col-lg-6 flex">
                  <VarunaInfo/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-lg-6">
                  <Myproperties />

                </div>
                <div className="col-lg-6 flex">
                  <MypropertiesInfo/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-lg-6">
                  <AOP />

                </div>
                <div className="col-lg-6 flex">
                  <AOPInfo/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-lg-6">
                  <Bellawatt />

                </div>
                <div className="col-lg-6 flex">
                  <BellawattInfo/>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="row">
                <div className="col-lg-6">
                  <UtilityRadar />

                </div>
                <div className="col-lg-6 flex">
                  <UtilityRadarInfo/>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="row">
                <div className="col-lg-6">
                  <ILJP />
                </div>
                <div className="col-lg-6 flex">
                  <ILJPInfo />
                </div>
              </div>
            </div> */}
            <div className='hidden-icon'></div>


           </Slider>

           <div className='icon-circle-left d-none d-lg-block' style={{ pointerEvents: rightArrowPointer, opacity: rightArrowPointer === 'none' ? '.4': '1' }}>
             <i  onClick={()=>this.slider.slickGoTo(this.state.projectIndex - 1)} className="material-icons left-arrow">chevron_left</i>
           </div>
           <div className='icon-circle-right d-none d-lg-block' style={{ pointerEvents: leftArrowPointer, opacity: leftArrowPointer === 'none' ? '.4': '1' }}>
             <i onClick={()=>this.slider.slickGoTo(this.state.projectIndex + 1)} className="material-icons right-arrow">chevron_right</i>
           </div>

        </div>



      </section>
    );
  }
}

export default Portfolio;
