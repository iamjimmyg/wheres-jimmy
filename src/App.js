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
//import { StickyContainer, Sticky } from 'react-sticky'

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
    console.log(to);
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
