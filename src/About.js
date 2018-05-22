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
        <p>As a front-end developer, I write code that conforms to industry standards and semantic best practices. I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces.</p>

      </div>,
      iconSection1: <div className="invisible">
        <i className="material-icons">important_devices</i>
      </div>,
      iconSection2: <div className="invisible">
        <i className="material-icons">lightbulb_outline</i>
      </div>,
      iconSection3: <div className="invisible">
        <i className="material-icons">timeline</i>
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
    this.setState({ title: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0, {stiffness: 120, damping: 17}), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}} className="text-center">ABOUT</h1>}
    </Motion> })
  }

  handleIconSection1(){
    // setTimeout(()=>{
      this.setState({ iconSection1: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>
          <i className="material-icons">important_devices</i>

        </div>}
      </Motion> })
    // }, 100)

  }
  handleIconSection2(){
    // setTimeout(() => {
      this.setState({ iconSection2: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>
            <i className="material-icons">lightbulb_outline</i>
        </div>}
      </Motion> })
    // },200)

  }
  handleIconSection3(){
    // setTimeout(()=>{
      this.setState({ iconSection3: <Motion defaultStyle={{x: -150, o: 0}} style={{x: spring(0), o: spring(1)}}>
        {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}}>
          <i className="material-icons">timeline</i>

        </div>}
      </Motion> })
    // },300)
  }

  handleProfileSection(){
    this.setState({ profileSection: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div style={{left: value.x, opacity: value.o, position: 'relative'}} className="bio">
        <h5 className="text-center">MY WORK</h5>
        <div className="">
          <p>Offering creative design solutions to solve business problems is what I do best. I write in JavaScript, CSS, Ruby. I also speak to databases and make servers do stuff. I like working on scalability, performance, reusability, and great user experiences.</p>
          <p>As a front-end developer, I write code that conforms to industry standards and semantic best practices. I am able to transform static artwork into pixel perfect, interactive and fully functional interfaces.</p>

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

  render() {

    return (
      <section className="container" id='about'>
        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}

        <div className="about-container">


          <div className="row icon-section">
            <Waypoint onEnter={()=>{this.handleIconSection1()}}
              bottomOffset='150px'
            />
            <div className='col-lg-3 text-center'>

              {this.state.iconSection1}
            </div>

            <div className='col-lg-9'>
              <h4>RESPONSIVE</h4>
              <h5>My layouts will work and respond to any device size big or small</h5>
            </div>

          </div>

          <div className="row icon-section">
            <Waypoint onEnter={()=>{this.handleIconSection2()}}
              bottomOffset='150px'
            />
            <div className='col-lg-3 text-center'>

              {this.state.iconSection2}
            </div>
            <div className='col-lg-9'>
              <h4>INTUITIVE</h4>
              <h5>Preference for easy to use UX and intuitive design</h5>
            </div>

          </div>

          <div className="row icon-section">
            <Waypoint onEnter={()=>{this.handleIconSection3()}}
              bottomOffset='150px'
            />
            <div className='col-lg-3 text-center'>

              {this.state.iconSection3}
            </div>

            <div className='col-lg-9'>
              <h4>PERFORMANCE</h4>
              <h5>Strong performance for an engaging and rich user experience</h5>
            </div>
          </div>



          <div className=''>
            <div className="">
              <Waypoint onEnter={()=>{this.handleProfileSection()}}
                bottomOffset='150px'
              />
              {this.state.profileSection}
            </div>

            <div className="">
              <Waypoint onEnter={()=>{this.handleStats()}}
                bottomOffset='200px'
              />
              {this.state.stats}
            </div>
          </div>


        </div>


      </section>
    );
  }
}

export default About;
