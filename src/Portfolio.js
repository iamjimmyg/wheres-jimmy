import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'
import AOP from './portfolio/AOP'
import Bellawatt from './portfolio/Bellawatt'
import UtilityRadar from './portfolio/UtilityRadar'

class Portfolio extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: <h1 className='invisible'>Portfolio</h1>,
      aop: <AOP klass='invisible'/>,
      bellawatt: <Bellawatt klass='invisible' />,
      utilityRadar: <UtilityRadar klass='invisible' />
    }
    this.handleBellawatt = this.handleBellawatt.bind(this)
    this.handleAOP = this.handleAOP.bind(this)
    this.handleUtilityRadar = this.handleUtilityRadar.bind(this)
  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <h1 style={{top: value.x, opacity: value.o, position: 'relative'}}>Portfolio</h1>}
    </Motion>})
  }

  handleAOP(){
    this.setState({ aop: <Motion defaultStyle={{x: 35, o: 0}} style={{x: spring(0, {stiffness: 50 }), o: spring(1)}}>
      {value => <AOP style={{top: value.x, opacity: value.o}}/>}
    </Motion>})
  }

  handleBellawatt(){
    this.setState({ bellawatt: <Motion defaultStyle={{x: 35, o: 0}} style={{x: spring(0, {stiffness: 50 }), o: spring(1)}}>
      {value => <Bellawatt style={{top: value.x, opacity: value.o}}/>}
    </Motion>})
  }

  handleUtilityRadar(){
    this.setState({ utilityRadar: <Motion defaultStyle={{x: 35, o: 0}} style={{x: spring(0, {stiffness: 50 }), o: spring(1)}}>
      {value => <UtilityRadar style={{top: value.x, opacity: value.o}}/>}
    </Motion>})
  }

  render() {
    return (
      <section className="text-center" id='portfolio'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        <div className="container projects">
          <Waypoint onEnter={()=>{this.handleAOP()}}
            bottomOffset='150px'
          />
          {this.state.aop}

          <Waypoint onEnter={()=>{this.handleBellawatt()}}
            bottomOffset='150px'
          />
          {this.state.bellawatt}

          <Waypoint onEnter={()=>{this.handleUtilityRadar()}}
            bottomOffset='150px'
          />
          {this.state.utilityRadar}
        </div>

      </section>
    );
  }
}

export default Portfolio;
