import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHeader } from './actions/index';
import { bindActionCreators } from 'redux';

class Contact extends Component {
  render() {
    console.log(window.location.pathname)
    return (
      <section className="text-center" id='contact'>
        <h1>Contact</h1>


        {/* <p><a className="nav-link" href="#Home" onClick={()=>{this.props.selectHeader('home')}}>Back to top</a></p> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
