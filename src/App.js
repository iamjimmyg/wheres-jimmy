import React, { Component } from 'react'
import { Element} from 'react-scroll'

import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Testimonials from './Testimonials'

import Waypoint from 'react-waypoint'

class App extends Component{

  constructor (props){
      super(props);
      this.state = {
        imageOpacity: .1,
        textOpacity: 1,
        imageTransformY: 0,
        scale: 1,
        imageScale: 1,
        scroll: 0,
      }
  }

  componentDidMount () {

      window.onscroll =()=>{

        this.setState({scroll: window.scrollY})

        if(window.scrollY < window.innerHeight){

          let transformY = Math.floor((window.scrollY / window.innerHeight) * 300)
          let imageOpacity = (window.scrollY / window.innerHeight) + .1
          let imageScale = (((window.scrollY / window.innerHeight) + 1) * .5) + .5

          let textOpacity = (window.innerHeight - window.scrollY) / window.innerHeight
          let scale = .7 + (((window.innerHeight - window.scrollY) / window.innerHeight) * .3)
          this.setState({
            imageOpacity: imageOpacity,
            imageTransformY: transformY,
            scale: scale,
            textOpacity: textOpacity,
            imageScale: imageScale,
          })
        }
      }

  }

  render () {
  	return (
      <div>
        <Header />
        <Element name="home" className="element">
          <Home
            textOpacity={this.state.textOpacity}
            imageOpacity={this.state.imageOpacity}
            transformY={this.state.imageTransformY}
            scale={this.state.scale}
            imageScale={this.state.imageScale}
          />
        </Element>
        <main>

          <Element name="about" className="element">

            <About />
          </Element>

          <Waypoint onEnter={() => console.log('top passed')}

          />
          <Testimonials
            scroll={this.state.scroll}
           />
           <Waypoint onLeave={() => console.log('bottom passed')}

           />

          <Element name="portfolio" className="element">
            <Portfolio />
          </Element>

          <Element name="contact" className="element">
            <Contact />
          </Element>
        </main>

      </div>
    );
  }
}


export default App;
