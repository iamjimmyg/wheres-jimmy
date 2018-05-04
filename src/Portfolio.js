import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      bellawatt: <div className="row project invisible">
        <div className="card">
          <img src='bellawatt.png'/>
        </div>
        <div className="col-sm-8 text-left project-info">
          <h4>bellaWatt</h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>,
      aop: <div className="row project invisible">
        <div className="card">
          <img className='aop' src='nnsa.png'/>
        </div>
        <div className="col-8 text-left project-info">
          <h4>AOP</h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>,
      utilityRadar: <div className="row project invisible">
        <div className="card">
          <img className='utility-radar' src='apple-icon.png'/>
        </div>
        <div className="col-8 text-left project-info">
          <h4>Utility Radar</h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>
    }
    this.handleBellawatt = this.handleBellawatt.bind(this)
    this.handleAOP = this.handleAOP.bind(this)
    this.handleUtilityRadar = this.handleUtilityRadar.bind(this)
  }

  handleBellawatt(){
    this.setState({ bellawatt: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="card">
          <img src='bellawatt.png'/>
        </div>
        <div className="col-sm-8 text-left project-info">
          <h4><a href='http://www.bellawatt.com' target="_blank">bellaWatt</a></h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>}
    </Motion>})
  }

  handleAOP(){
    this.setState({ aop: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="card">
          <img className='aop' src='nnsa.png'/>
        </div>
        <div className="col-8 text-left project-info">
          <h4>AOP [Redacted]</h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>}
    </Motion>})
  }

  handleUtilityRadar(){
    this.setState({ utilityRadar: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="card">
          <img className='utility-radar' src='apple-icon.png'/>
        </div>
        <div className="col-8 text-left project-info">
          <h4><a href='http://www.utilityradar.com' target="_blank">Utility Radar</a></h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>}
    </Motion>})
  }

  render() {
    return (
      <section className="text-center" id='portfolio'>
        <h1>Portfolio</h1>
        <div className="container projects">
          <Waypoint onEnter={()=>{this.handleBellawatt()}}
            bottomOffset='150px'
          />
          {this.state.bellawatt}

          <Waypoint onEnter={()=>{this.handleAOP()}}
            bottomOffset='150px'
          />
          {this.state.aop}

          <Waypoint onEnter={()=>{this.handleUtilityRadar()}}
            bottomOffset='150px'
          />
          {this.state.utilityRadar}
          {/* <div className="row project">
            <div className="card">
              <img className='aop' src='nnsa.png'/>
            </div>
            <div className="col-8 text-left project-info">
              <h4>AOP</h4>
              <h5>Front-end Developer</h5>
              <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
            </div>
          </div> */}

          {/* <div className="row project">
            <div className="card">
              <img className='utility-radar' src='apple-icon.png'/>
            </div>
            <div className="col-8 text-left project-info">
              <h4>Utility Radar</h4>
              <h5>Front-end Developer</h5>
              <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
            </div>
          </div> */}
        </div>

      </section>
    );
  }
}

export default Portfolio;
