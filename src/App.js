import React, { Component } from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import HomepageBackground from './Particles'

class App extends Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }


  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  // scrollTo() {
  //   scroll.scrollTo(100);
  // }
  // scrollMore() {
  //   scroll.scrollMore(100);
  // }
  handleSetActive(to) {
    console.log('yoo', to);
  }
  render () {
  	return (
      <div>
        <Header />
        <Element name="home" className="element">
          <Home />
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
