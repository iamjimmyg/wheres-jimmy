import React, { Component } from 'react';
import Stats from './Stats'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      stats: '',
      iconSection: '',
      profileSection: ''
    }
    this.handleStats = this.handleStats.bind(this)
    this.handleIconSection = this.handleIconSection.bind(this)
    this.handleProfileSection = this.handleProfileSection.bind(this)
  }

  handleProfileSection(){
    this.setState({ profileSection: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o}} className="col-lg-5 col-sm-12 text-center ">
        <div className="profile-pic">
          <div className="hexa">
            <div className="hex1">
              <div className="hex2">
                <img src="profilepic.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="bio">
          <h3>Jimmy Gonzalez</h3>
          <p>Hey I'm Jimmy Gonzalez, I'm a sick as full-stack developer, checkout my shit, I can make websites while high as shit</p>
        </div>
      </div>}
    </Motion> })
  }

  handleStats(){
    this.setState({ stats: <Stats /> })
  }

  handleIconSection(){
    this.setState({ iconSection: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0, {stiffness: 120 }), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o}} className="row icon-section text-center">
        <div className="col-md-4">
          <div><i class="material-icons">important_devices</i></div>
          <h5>Responsive</h5>
          <p>Shit is responsive as fuck yo in any browser</p>
        </div>
        <div className="col-md-4 ">
          <div><i class="material-icons">lightbulb_outline</i></div>
          <h5>Intuitive</h5>
          <p>You'll shit your brains when you see how intuitive I am with this shit</p>
        </div>
        <div className="col-md-4">
          <i class="material-icons">timeline</i>
          <h5>Performance</h5>
          <p>Perforance will be at an all time mother fuckin high</p>
        </div>

      </div>}
    </Motion> })
  }

  render() {

    return (
      <section className="container" id='about'>
        <h1 className="text-center">About</h1>

        <div className="row about-me-content">

          <Waypoint onEnter={()=>{
            this.handleProfileSection()
          }}/>
          {this.state.profileSection}
          <div className="col-lg-7">
            <Waypoint onEnter={()=>{
              this.handleStats()
            }}/>
            {this.state.stats}
          </div>
        </div>

        <Waypoint onEnter={()=>{
          this.handleIconSection()
        }}/>
        {this.state.iconSection}

      </section>
    );
  }
}

export default About;
