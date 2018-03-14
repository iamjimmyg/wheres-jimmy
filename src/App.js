import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { StickyContainer, Sticky } from 'react-sticky'

import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div>
        <ScrollableAnchor id={'Home'}>
          <Home />
        </ScrollableAnchor>
        <StickyContainer style={{ background: "#ddd", padding: "0 30px" }}>
          <Sticky>
            {({
              isSticky,
              wasSticky,
              style,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              console.log({
                isSticky,
                wasSticky,
                style,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              });
              return <Header style={style} />;
            }}
          </Sticky>

          <ScrollableAnchor id={'About'}>
            <About />
          </ScrollableAnchor>
          <ScrollableAnchor id={'Portfolio'}>
            <Portfolio />
          </ScrollableAnchor>
          <ScrollableAnchor id={'Contact'}>
            <Contact />
          </ScrollableAnchor>
        </StickyContainer>

       </div>
    );
  }
}

export default App;
