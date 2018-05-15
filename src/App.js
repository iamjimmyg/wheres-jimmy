import React, { Component } from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'


class App extends Component{

  constructor (props){
      super(props);
      this.state = {
        opacity: 0,
        imageTransformY: 0,
      }
      this.scrollToTop = this.scrollToTop.bind(this);
  }


  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }

  componentDidMount () {


      window.onscroll =()=>{
        if(window.scrollY < window.innerHeight){
          //console.log(window.scrollY)
      //   console.log('scroll posish', window.scrollY)
      //   console.log('window height', window.innerHeight)
          let transformY = Math.floor((window.scrollY / window.innerHeight) * 300)
          //console.log(transformX)
          let opacity = (window.scrollY / window.innerHeight) + .1
          this.setState({ opacity: opacity, imageTransformY: transformY })
        }
      }

  }

  render () {
  	return (
      <div>
        <Header />
        <Element name="home" className="element">
          <Home opacity={this.state.opacity} transformY={this.state.imageTransformY}/>
        </Element>
        <main>

          <Element name="about" className="element">

            <About />
          </Element>

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
