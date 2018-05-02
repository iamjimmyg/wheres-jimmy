import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectHeader } from './actions/index'
import { bindActionCreators } from 'redux'
//import video from '../public/typing.mov'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Motion, spring} from 'react-motion'

class Home extends Component {
  render() {
    return (
      <section className="container flex" id='landing'>
        <Motion defaultStyle={{x: -25, o: 0}} style={{x: spring(0, {stiffness: 120,damping: 30}), o: spring(1, {stiffness: 30})}}>
          {value => <div className="landing-content container" style={{left: value.x, opacity: value.o}}>

            <div className="text-center center-content">
              <h5 className="font-italic">I'm here to help clients with their business by fixing and creating projects of value</h5>
              <h1> {'Blah blah blah blahb blah'.toUpperCase()}</h1>
              <Link className="homepage-button" to="about" spy={true} smooth={true} duration={500} onClick={()=>{this.props.selectHeader('about')}} >
                <div>About my work</div>
              </Link>
            </div>
          </div>}
        </Motion>

      </section>

    );
  }
}

function mapStateToProps(state){
  return {
    headerData: state.headerData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectHeader: selectHeader }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
