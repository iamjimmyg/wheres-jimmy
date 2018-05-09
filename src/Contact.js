import React, { Component } from 'react';
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: <h1 className='invisible'>Contact</h1>,
      feedback1: <p className='invisible'>“Jimmy was the primary developer on several client facing functional demos. With minimal guidance, he delivered and deployed 3 HTML/CSS/JS/React projects. We have been thrilled with the results!”</p>,
      feedback2: <p className='invisible'>"Jimmy contributed to an existing large, complex project. It was built primarily using Ruby on Rails, with a Dockerized setup for development. Despite the fact that these were completely new technologies for him, Jimmy was able to jump in and get productive really quickly. Our customer for this product has been extremely happy with what we’ve delivered."</p>,
      feedback3: <p className='invisible'>“Jimmy developed a track record of consistently shipping results that mattered to us and to our customers.”</p>,
    }
    this.handleFeedback1 = this.handleFeedback1.bind(this)
    this.handleFeedback2 = this.handleFeedback2.bind(this)
    this.handleFeedback3 = this.handleFeedback3.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
  }

  handleTitle(){
    this.setState({ title: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}}>Contact</h1>}
    </Motion> })
  }

  handleFeedback1(){
    this.setState({ feedback1: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h5 className='font-italic' style={{left: value.x, opacity: value.o, position: 'relative', padding: '10px'}}>“Jimmy was the primary developer on several client facing functional demos. With minimal guidance, he delivered and deployed 3 HTML/CSS/JS/React projects. We have been thrilled with the results!”</h5>}
    </Motion> })
  }
  handleFeedback2(){
    this.setState({ feedback2: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h5 className='font-italic' style={{left: value.x, opacity: value.o, position: 'relative', padding: '10px'}}>"He contributed to an existing large, complex project. It was built primarily using Ruby on Rails, with a Dockerized setup for development. Despite the fact that these were completely new technologies for him, Jimmy was able to jump in and get productive really quickly. Our customer for this product has been extremely happy with what we’ve delivered."</h5>}
    </Motion> })
  }
  handleFeedback3(){
    this.setState({ feedback3: <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <h5 className='font-italic' style={{left: value.x, opacity: value.o, position: 'relative', padding: '10px'}}>“Jimmy developed a track record of consistently shipping results that mattered to us and to our customers.”</h5>}
    </Motion> })
  }

  render() {
    return (
      <section className="text-center container" id='contact'>

        <Waypoint onEnter={()=>{this.handleTitle()}}
          bottomOffset='150px'
        />
        {this.state.title}
        <div className='feedback'>
          <div className='row'>
            <div className='col-lg-7'>
              <Waypoint onEnter={()=>{this.handleFeedback1()}}
                bottomOffset='150px'
              />
              {this.state.feedback1}

            </div>
            <div className='col-lg-5'>

            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5'>

            </div>
            <div className='col-lg-7'>
              <Waypoint onEnter={()=>{this.handleFeedback3()}}
                bottomOffset='150px'
              />
              {this.state.feedback3}

            </div>
          </div>
          <div className='row'>

            <div className='col-lg-7'>
              <Waypoint onEnter={()=>{this.handleFeedback2()}}
                bottomOffset='150px'
              />
              {this.state.feedback2}

            </div>
            <div className='col-lg-5'>

            </div>

          </div>
        </div>

        <div>

        </div>
        {/* <p><a className="nav-link" href="#Home" onClick={()=>{this.props.selectHeader('home')}}>Back to top</a></p> */}
      </section>
    );
  }
}



export default Contact
