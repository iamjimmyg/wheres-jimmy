import React, { Component } from 'react';
import Stats from './Stats'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      stats: <Stats klass='d-none'/>,
      profileSection: <div className="col-lg-5 col-sm-12 text-center invisible">
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
      </div>,
      iconSection1: '',
      iconSection2: <div className="col-md-4 invisible">
        <div><i className="material-icons">lightbulb_outline</i></div>
        <h5>Intuitive</h5>
        <p>You'll shit your brains when you see how intuitive I am with this shit</p>
      </div>,
      iconSection3: <div className="col-md-4 invisible">
        <i className="material-icons">timeline</i>
        <h5>Performance</h5>
        <p>Perforance will be at an all time mother fuckin high</p>
      </div>,
    }
    this.handleStats = this.handleStats.bind(this)
    this.handleProfileSection = this.handleProfileSection.bind(this)
    this.handleIconSection1 = this.handleIconSection1.bind(this)
    this.handleIconSection2 = this.handleIconSection2.bind(this)
    this.handleIconSection3 = this.handleIconSection3.bind(this)
  }

  handleProfileSection(){
    this.setState({ profileSection: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o,}} className="col-lg-5 col-sm-12 text-center ">
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
    setTimeout(()=>{
    this.setState({ stats: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <Stats style={{left: value.x, opacity: value.o,}}/>}
    </Motion> })
  }, 300)
  }

  handleIconSection1(){
    setTimeout(()=>{
      this.setState({ iconSection1: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o,}}>
          <div><i className="material-icons">important_devices</i></div>
          <h5>Responsive</h5>
          <p>Shit is responsive as fuck yo in any browser</p>
        </div>}
      </Motion> })
    }, 600)

  }
  handleIconSection2(){
    setTimeout(() => {
      this.setState({ iconSection2: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o}}>
          <div><i className="material-icons">lightbulb_outline</i></div>
          <h5>Intuitive</h5>
          <p>You'll shit your brains when you see how intuitive I am with this shit</p>
        </div>}
      </Motion> })
    },900)

  }
  handleIconSection3(){
    setTimeout(()=>{
      this.setState({ iconSection3: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o}}>
          <i className="material-icons">timeline</i>
          <h5>Performance</h5>
          <p>Perforance will be at an all time mother fuckin high</p>
        </div>}
      </Motion> })
    },1200)

  }

  render() {

    return (
      <section className="container" id='about'>
        <h1 className="text-center">About</h1>

        <div className="row about-me-content">

          <Waypoint onEnter={()=>{this.handleProfileSection()}}
            bottomOffset='150px'
          />
          {this.state.profileSection}
          <div className="col-lg-7">
            <Waypoint onEnter={()=>{this.handleStats()}}
              bottomOffset='150px'
            />
            {this.state.stats}
          </div>
        </div>

        <div className="row icon-section text-center">
          <Waypoint onEnter={()=>{this.handleIconSection1()}}
            bottomOffset='100px'
          />
          {this.state.iconSection1}

          <Waypoint onEnter={()=>{this.handleIconSection2()}}
            bottomOffset='100px'
          />
          {this.state.iconSection2}

          <Waypoint onEnter={()=>{this.handleIconSection3()}}
            bottomOffset='100px'
          />
          {this.state.iconSection3}

        </div>

      </section>
    );
  }
}

export default About;
