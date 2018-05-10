import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'
import AOP from './portfolio/AOP'
import AOPInfo from './portfolio/AOPInfo'
import Bellawatt from './portfolio/Bellawatt'
import BellawattInfo from './portfolio/BellawattInfo'
import UtilityRadar from './portfolio/UtilityRadar'
import UtilityRadarInfo from './portfolio/UtilityRadarInfo'

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.aop = <AOP />
    this.aopInfo = <AOPInfo />
    this.bellawatt = <Bellawatt />
    this.bellawattInfo = <BellawattInfo />
    this.utilityRadar = <UtilityRadar />
    this.utilityRadarInfo = <UtilityRadarInfo />

    this.state = {
      title: <h1 className='invisible'>Portfolio</h1>,
      aop: <div className='invisible'>{this.aop}</div>,
      aopInfo: <div className='invisible'>{this.aopInfo}</div>,
      bellawatt: <div className='invisible'>{this.bellawatt}</div>,
      bellawattInfo: <div className='invisible'>{this.bellawattInfo}</div>,
      utilityRadar: <div className='invisible'>{this.utilityRadar}</div>,
      utilityRadarInfo: <div className='invisible'>{this.utilityRadarInfo}</div>,
    }
    this.handleAOP = this.handleAOP.bind(this)
    this.handleAOPInfo = this.handleAOPInfo.bind(this)
    this.handleBellawatt = this.handleBellawatt.bind(this)
    this.handleBellawattInfo = this.handleBellawattInfo.bind(this)
    this.handleUtilityRadar = this.handleUtilityRadar.bind(this)
    this.handleUtilityRadarInfo = this.handleUtilityRadarInfo.bind(this)
  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}}>Portfolio</h1>}
    </Motion>})
  }

  handleAOP(){
    this.setState({ aop: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.aop}</div>}
    </Motion>})
  }
  handleAOPInfo(){
    // setTimeout(() => {
      this.setState({ aopInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.aopInfo}</div>}
      </Motion>})
    // },100)
  }

  handleBellawatt(){
    this.setState({ bellawatt: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.bellawatt}</div>}
    </Motion>})
  }
  handleBellawattInfo(){
    // setTimeout(() => {
      this.setState({ bellawattInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.bellawattInfo}</div>}
      </Motion>})
    // },100)
  }

  handleUtilityRadar(){
    this.setState({ utilityRadar: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.utilityRadar}</div>}
    </Motion>})
  }
  handleUtilityRadarInfo(){
    // setTimeout(() => {
      this.setState({ utilityRadarInfo: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>{this.utilityRadarInfo}</div>}
      </Motion>})
    // },100)
  }

  render() {
    return (
      <section className="text-center" id='portfolio'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        <div className="container projects">
          <div className='row project'>
            <div className='col-lg-5'>
              <Waypoint onEnter={()=>{this.handleAOP()}}
                bottomOffset='100px'
              />
              {this.state.aop}
            </div>
            <div className='col-lg-7 '>
              <Waypoint onEnter={()=>{this.handleAOPInfo()}}
                bottomOffset='100px'
              />
              {this.state.aopInfo}
            </div>

          </div>
          <div className='row project'>
            <div className='col-lg-5'>
              <Waypoint onEnter={()=>{this.handleBellawatt()}}
                bottomOffset='100px'
              />
              {this.state.bellawatt}
            </div>
            <div className='col-lg-7'>
              <Waypoint onEnter={()=>{this.handleBellawattInfo()}}
                bottomOffset='100px'
              />
              {this.state.bellawattInfo}
            </div>

          </div>

          <div className='row project'>
            <div className='col-lg-5'>
              <Waypoint onEnter={()=>{this.handleUtilityRadar()}}
                bottomOffset='100px'
              />
              {this.state.utilityRadar}
            </div>
            <div className='col-lg-7'>
              <Waypoint onEnter={()=>{this.handleUtilityRadarInfo()}}
                bottomOffset='100px'
              />
              {this.state.utilityRadarInfo}
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Portfolio;
