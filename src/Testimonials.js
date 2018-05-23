import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'
import IronImage from './IronImage'

class Testimonials extends Component {
  constructor(props){
    super(props)

  }


  render() {
    let backgroundImageStyle = `translateY(${-this.props.transformY}px)`
    return (
      <section className="text-center" id='testimonials'>

        {/* <IronImage
          //srcPreload='background-image.jpg'
          transformY={this.props.transformY}
          backgroundImageStyle={backgroundImageStyle}
          //srcLoaded='../background-image.jpg'
        /> */}
        <div className='background-image'>
        </div>
        <div className='background-opacity'></div>
      </section>
    );
  }
}

export default Testimonials;
