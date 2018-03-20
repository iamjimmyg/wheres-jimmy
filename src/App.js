// import React, { Component } from 'react'
// // import  ScrollableAnchor  from 'react-scrollable-anchor'

// // import { HashRouter } from 'react-router-dom'
// //
// // import Header from './Header'
// // import Home from './Home'
// // import About from './About'
// // import Portfolio from './Portfolio'
// // import Contact from './Contact'
// // import HomepageBackground from './Particles'
//
// class App extends Component {
//
//   // componentWillReceiveProps(nextProps){
//   //
//   //   let path = window.location.href.split('')
//   //   let headerPath = []
//   //   let foundPound = false;
//   //   path.forEach(letter => {
//   //
//   //     if(foundPound === true) headerPath.push(letter)
//   //     if(letter === '#') foundPound = true
//   //   })
//   //   console.log(headerPath)
//   // }
//   render() {
//
//     return (
//       <div>
//         <HomepageBackground />
//         <ScrollableAnchor id={'Home'}>
//           <Home />
//         </ScrollableAnchor>
//         <StickyContainer>
//           <Sticky>
//             {({
//               isSticky,
//               wasSticky,
//               style,
//               distanceFromTop,
//               distanceFromBottom,
//               calculatedHeight
//             }) => {
//               return <Header style={style} />;
//             }}
//           </Sticky>
//
//           <ScrollableAnchor id={'About'}>
//             <About />
//           </ScrollableAnchor>
//           <ScrollableAnchor id={'Portfolio'}>
//             <Portfolio />
//           </ScrollableAnchor>
//           <ScrollableAnchor id={'Contact'}>
//             <Contact />
//           </ScrollableAnchor>
//         </StickyContainer>
//
//       </div>
//     );
//   }
// }
//"use strict";

import React, { Component } from 'react'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { StickyContainer, Sticky } from 'react-sticky'

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
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  // handleSetActive(to) {
  //   console.log(to);
  // }
  render () {
  	return (
      <div>

        {/* <nav>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            Home
          </Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={1000} onSetActive={this.handleSetActive}>
            About
          </Link>
          <Link className="test6" to="portfolio" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
            Portfolio
          </Link>
          <Link className="test6" to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
            Contact
          </Link>
        </nav> */}
        <Header />
        <HomepageBackground />
        <Element name="home" className="element">
          <Home />

        </Element>

        <Element name="about" className="element">
          <About />
        </Element>

        <Element name="portfolio" className="element">
          <Portfolio />
        </Element>

        <Element name="contact" className="element">
          <Contact />
        </Element>


        {/* <StickyContainer>
           <Sticky>
             {({
               // isSticky,
               // wasSticky,
               style,
               // distanceFromTop,
               // distanceFromBottom,
               // calculatedHeight
             }) => {
               return <Header style={style} />;
             }}
           </Sticky>
           <div>
             <Element name="about" className="element">
               <About />
             </Element>

             <Element name="portfolio" className="element">
               <Portfolio />
             </Element>

             <Element name="contact" className="element">
               <Contact />
             </Element>
           </div>


         </StickyContainer> */}







        {/* <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>

          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div> */}

        {/* <a onClick={this.scrollToTop}>To the top!</a>
        <br/> */}
        {/* <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a> */}
      </div>
    );
  }
}


export default App;
