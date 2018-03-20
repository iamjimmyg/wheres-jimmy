import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHeader } from './actions/index';
import { bindActionCreators } from 'redux';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Home extends Component {
  render() {
    return (
      <section className="text-center flex" id='landing'>

        <h1>Hello, I'm Jimmy Gonzalez.<br/> I'm a full-stack web developer</h1>
        <Link className="homepage-button" to="about" spy={true} smooth={true} duration={500} onClick={()=>{this.props.selectHeader('about')}} >
          <div>View my work</div>
        </Link>
        {/* <a className="homepage-button" href="#About" onClick={()=>{this.props.selectHeader('about')}}><div>View my work</div></a> */}
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
