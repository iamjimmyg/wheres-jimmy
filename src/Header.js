import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectHeader } from './actions/index';
import { bindActionCreators } from 'redux';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Header extends Component {
  constructor(props) {
    super(props);
    //let hrClass = ''

    this.state = {
      selected: '',
      hr: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSetActive = this.handleSetActive.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
      //selected = arguments[0]
      //console.log(to)
    });
    // this.setState({ hr: selected})
    Events.scrollEvent.register('end', function(to, element) {
      //console.log("end", arguments);
    });

    scrollSpy.update();
  }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  componentWillMount(){
    this.handleSetActive()
    //this.handleScroll(to)
    //this.setState({ hr: 'home' })
    //setTimeout(()=>{ this.setState({ hr: '' }) },500)
  }
  //
  handleScroll(selected){
    //console.log('current page =', selected);
    this.setState({ hr: selected })
  }
  handleChange(event) {
    event.preventDefault()

    let text = event
    console.log('handlechange = ', text)
    //
    // let selected=''
    // if(text === 'HOME') selected = 'home'
    // if(text === 'ABOUT') selected = 'about'
    // else if(text === 'PORTFOLIO') selected = 'portfolio'
    // else if(text === 'CONTACT') selected = 'contact'
    //
    // this.props.selectHeader(selected)
  }

  handleSetActive(to) {
    console.log('current page =', to);
    if(to !== 'home'){
      this.setState({ position: 'everything-else-header' })
      console.log('become fixed')
    }else{
      this.setState({ position: 'bring-down' })
      console.log('become relative')
    }
    // this.setState({ hr: '' })
    this.handleScroll(to)
    return to;
  }
  // handleSetInactive(to){
  //   console.log('inactive = ', to)
  // }

  render() {

    return (

      <header className={this.state.position} style={{
          ...this.props.style,

          // overflow: "auto",
          // background: "#aaa"
        }}>

        <ul className="nav">
          <li onChange={(event) =>  this.setState({ hr: event.target.value })} className={this.state.hr === 'home' ? 'nav-item' : 'nav-item'}>
            <Link to="home" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
              <p className={this.state.hr === 'home' ? 'nav-link active' : 'nav-link'}>HOME</p>
            </Link>
          </li>
          <li className={this.state.hr === 'about' ? 'nav-item about' : 'nav-item'}>
            <Link onClick={(e) => this.handleChange(e)} to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
              <p value='about' className={this.state.hr === 'about' ? 'nav-link active' : 'nav-link'}>ABOUT</p>
            </Link>
          </li>
          <li onClick={this.handleChange} className={this.state.hr === 'portfolio' ? 'nav-item portfolio' : 'nav-item'}>
            <Link to="portfolio" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
              <p className={this.state.hr === 'portfolio' ? 'nav-link active' : 'nav-link'}>PORTFOLIO</p>
            </Link>
          </li>
          <li onClick={this.handleChange} className={this.state.hr === 'contact' ? 'nav-item contact' : 'nav-item'}>
            <Link to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
              <p className={this.state.hr === 'contact' ? 'nav-link active' : 'nav-link'}>CONTACT</p>
            </Link>
          </li>
          {/* <hr className={this.state.hr}/> */}
        </ul>
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
