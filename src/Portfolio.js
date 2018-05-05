import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: <h1 className='invisible'>Portfolio</h1>,
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className='bellawatt' src='utilityradar1.png' alt="First slide"/>
          </div>

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

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <h1 style={{top: value.x, opacity: value.o, position: 'relative'}}>Portfolio</h1>}
    </Motion>})
  }

  handleAOP(){
    this.setState({ aop: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="col-lg-5">
          <div className='banner'><i className="material-icons browser-dots">more_horiz</i></div>
          <div id="carouselAOP" className="carousel slide card" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src='aop1.png' alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="aop2.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="image" src="aop3.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselAOP" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselAOP" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-lg-7 text-left project-info">
          <h4>AOP [Redacted]</h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>}
    </Motion>})
  }

  handleBellawatt(){
    this.setState({ bellawatt: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="col-lg-5">
          <div id="carouselBellawatt" className="carousel slide card" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src='bellawatt2.png' alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="bellawatt1.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="image" src="bellawatt3.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselBellawatt" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselBellawatt" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>
        <div className="col-lg-7 text-left project-info">
          <h4><a href='http://www.bellawatt.com' target="_blank">bellaWatt</a></h4>
          <h5>Front-end Developer</h5>
          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>}
    </Motion>})
  }

  handleUtilityRadar(){
    this.setState({ utilityRadar: <Motion defaultStyle={{x: 25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div className="row project" style={{top: value.x, opacity: value.o}}>
        <div className="col-lg-5">
          <div id="carouselExampleControls" className="carousel slide card" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src='utilityradar1.png' alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="utilityradar2.png" alt="Second slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-lg-7 text-left project-info">
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
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        {/* <h1>Portfolio</h1> */}
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
