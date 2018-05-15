import React, { Component } from 'react';
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: <h1 className='invisible'>CONTACT</h1>,
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
      {value => <h1 style={{left: value.x, opacity: value.o, position: 'relative'}}>CONTACT</h1>}
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

        <div className="social-media-icons">
            <a href='http://www.facebook.com/jimmy.gonzalez.3517' target="_blank" className="facebook icon" title="Facebook"><svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg></a>
            <a href='http://www.github.com/iamjimmyg' target="_blank" className="github icon" title="GitHub"><svg viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg></a>
            <a href='http://www.linkedin.com/in/iamjimmyg' target="_blank" className="linkedin icon" title="LinkedIn"><svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg></a>
        </div>
        {/* <p><a className="nav-link" href="#Home" onClick={()=>{this.props.selectHeader('home')}}>Back to top</a></p> */}
      </section>
    );
  }
}



export default Contact
