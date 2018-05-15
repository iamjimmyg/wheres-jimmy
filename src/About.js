import React, { Component } from 'react';
import Stats from './Stats'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: <h1 className="text-center invisible">ABOUT</h1>,
      stats: <Stats klass='invisible'/>,
      profileSection: <div className="bio invisible">
        <p>Offering creative design solutions to solve business problems is what I do best.</p>
        <p>I write in JavaScript, CSS, Java, and PHP. I also speak to databases and make servers do stuff. I like working on scalability, performance, reusability, and great user experiences.</p>
        <p>As a designer and a developer, I write code that conforms to industry standards and semantic best practices. I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces.</p>

      </div>,
      iconSection1: <div className="col-md-4 invisible">
        <div><i className="material-icons">important_devices</i></div>
        <h5>RESPONSIVE</h5>
        <p>Shit is responsive as fuck yo in any browser</p>
      </div>,
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
    this.handleTitle = this.handleTitle.bind(this)
  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0, {stiffness: 120, damping: 17}), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}} className="text-center">ABOUT</h1>}
    </Motion> })
  }

  handleProfileSection(){
    this.setState({ profileSection: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}} className="">
        <h5 className="text-center">MY WORK</h5>
        <div className="bio">
          <p>Offering creative design solutions to solve business problems is what I do best. I write in JavaScript, CSS, Java, and PHP. I also speak to databases and make servers do stuff. I like working on scalability, performance, reusability, and great user experiences.</p>
          <p>As a designer and a developer, I write code that conforms to industry standards and semantic best practices. I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces.</p>

        </div>
      </div>}
    </Motion> })
  }

  handleStats(){
    // setTimeout(()=>{
    this.setState({ stats: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <Stats style={{left: value.x, opacity: value.o,}}/>}
    </Motion> })
    // }, 100)
  }

  handleIconSection1(){
    // setTimeout(()=>{
      this.setState({ iconSection1: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o,}}>
          <div><i className="material-icons">important_devices</i></div>
          <h5>RESPONSIVE</h5>
          <p>Shit is responsive as fuck yo in any browser</p>
        </div>}
      </Motion> })
    // }, 100)

  }
  handleIconSection2(){
    // setTimeout(() => {
      this.setState({ iconSection2: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o}}>
          <div><i className="material-icons">lightbulb_outline</i></div>
          <h5>INTUITIVE</h5>
          <p>You'll shit your brains when you see how intuitive I am with this shit</p>
        </div>}
      </Motion> })
    // },200)

  }
  handleIconSection3(){
    // setTimeout(()=>{
      this.setState({ iconSection3: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div className="col-md-4" style={{left: value.x, opacity: value.o}}>
          <i className="material-icons">timeline</i>
          <h5>PERFORMANCE</h5>
          <p>Perforance will be at an all time mother fuckin high</p>
        </div>}
      </Motion> })
    // },300)
  }

  render() {

    return (
      <section className="container" id='about'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}

        <div className="row icon-section text-center">
          <Waypoint onEnter={()=>{this.handleIconSection1()}}
            bottomOffset='150px'
          />
          {this.state.iconSection1}

          <Waypoint onEnter={()=>{this.handleIconSection2()}}
            bottomOffset='175px'
          />
          {this.state.iconSection2}

          <Waypoint onEnter={()=>{this.handleIconSection3()}}
            bottomOffset='200px'
          />
          {this.state.iconSection3}

        </div>
        <div className='row'>
          <div className="col-lg-5">
            <Waypoint onEnter={()=>{this.handleProfileSection()}}
              bottomOffset='150px'
            />
            {this.state.profileSection}
          </div>

          <div className="col-lg-7">
            <Waypoint onEnter={()=>{this.handleStats()}}
              bottomOffset='200px'
            />
            {this.state.stats}
          </div>
        </div>


      </section>
    );
  }
}

export default About;
