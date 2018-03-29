import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectHeader } from './actions/index'
import { bindActionCreators } from 'redux'
//import video from '../public/typing.mov'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Home extends Component {
  render() {
    return (
      <section className="container flex" id='landing'>
        <div className="fullscreen-video-wrap">
          <video src='typing.mov' autoplay='true' loop='true'>
          </video>
        </div>
        <div className="video-overlay"></div>


        <div className="landing-content container">



          <div className="text-center center-content">
            <h5 className="font-italic">I'm here to help clients with their business by fixing and creating projects of value</h5>
            <h1> {'Lets build something amazing together'.toUpperCase()}</h1>
            <Link className="homepage-button" to="about" spy={true} smooth={true} duration={500} onClick={()=>{this.props.selectHeader('about')}} >
              <div>About my work</div>
            </Link>
          </div>

        </div>
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
