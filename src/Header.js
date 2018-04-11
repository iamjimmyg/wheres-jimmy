import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectHeader } from './actions/index';
import { bindActionCreators } from 'redux';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenu: false,
      hr: '',
    };
    this.handleSetActive = this.handleSetActive.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.hamburgerClick = this.hamburgerClick.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      //console.log("begin", arguments);
      //selected = arguments[0]
      //console.log(to)
    });
    // this.setState({ hr: selected})
    Events.scrollEvent.register('end', function(to, element) {
      //console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillMount(){
    this.handleSetActive()
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleScroll(selected){
    this.setState({ hr: selected })
  }

  handleSetActive(to) {
    if(to !== 'home'){
      this.setState({ position: 'everything-else-header' })
      //console.log('become fixed')
    }else{
      this.setState({ position: 'bring-down' })
      //console.log('become relative')
    }
    this.handleScroll(to)
    //console.log('yoooo')
    //this.setState({ hamburgerMenu: false })
    return to;
  }

  hamburgerClick(event) {
    console.log('penis')
    event.preventDefault()
    if(this.state.hamburgerMenu === false){
      this.setState({ hamburgerMenu: true})
    }else if(this.state.hamburgerMenu === true) {
      this.setState({ hamburgerMenu: false})
    }
  }

  handleHamburgerLink(event) {
    console.log(window.innerWidth)
    if(window.innerWidth < 767){
      if(this.state.hamburgerMenu === false){
        this.setState({ hamburgerMenu: true})
      }else if(this.state.hamburgerMenu === true) {
        this.setState({ hamburgerMenu: false})
      }
    }
    //console.log(event.target)
    //this.hamburgerClick()

  }

  updateDimensions() {
    console.log(window.innerWidth)
    this.setState({ width: window.innerWidth });
  }

  render() {

    // if(window.innerWidth < 768) console.log('smalll');
    return (

      <header className={`${this.state.position} nav-bar`}>
        <nav className="navbar navbar-expand-md">
          <button onClick={this.hamburgerClick} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation">

            <div className={`${this.state.hamburgerMenu === true ? 'open navbar-toggler-icon' : 'navbar-toggler-icon'}`}>

              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`collapse navbar-collapse`} id="navbarSupportedContent">

            <ul className="navbar-nav">
              <li onChange={(event) =>  {this.setState({ hr: event.target.value })}} className={this.state.hr === 'home' ? 'nav-item' : 'nav-item'}>
                <Link data-toggle={this.state.width < 767 ? "collapse" : ""} data-target="#navbarSupportedContent" to="home" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  <p onClick={this.handleHamburgerLink.bind(this)} className={this.state.hr === 'home' ? 'nav-link active' : 'nav-link'}>HOME</p>
                </Link>
              </li>
              <li className={this.state.hr === 'about' ? 'nav-item about' : 'nav-item'}>
                <Link data-toggle={this.state.width < 767 ? "collapse" : ""} data-target="#navbarSupportedContent" to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                  <p onClick={this.handleHamburgerLink.bind(this)} className={this.state.hr === 'about' ? 'nav-link active' : 'nav-link'}>ABOUT</p>
                </Link>
              </li>
              <li className={this.state.hr === 'portfolio' ? 'nav-item portfolio' : 'nav-item'}>
                <Link data-toggle={this.state.width < 767 ? "collapse" : ""} data-target="#navbarSupportedContent" to="portfolio" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive} offset={-50}>
                  <p onClick={this.handleHamburgerLink.bind(this)} className={this.state.hr === 'portfolio' ? 'nav-link active' : 'nav-link'}>PORTFOLIO</p>
                </Link>
              </li>
              <li className={this.state.hr === 'contact' ? 'nav-item contact' : 'nav-item'}>
                <Link data-toggle={this.state.width < 767 ? "collapse" : ""} data-target="#navbarSupportedContent" to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive} offset={-50}>
                  <p onClick={this.handleHamburgerLink.bind(this)} className={this.state.hr === 'contact' ? 'nav-link active' : 'nav-link'}>CONTACT</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>


      </header>

    );
  }
}

function mapStateToProps(state){

  return {
    headerData: state.headerData
  }
}

function mapDispatchToProps(dispatch){
  //whenever selectResultsTab is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectHeader: selectHeader }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
