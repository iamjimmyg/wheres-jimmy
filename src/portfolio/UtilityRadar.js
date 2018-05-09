import React, { Component } from 'react'

class UtilityRadar extends Component {
  render (){
    return (
        <div>
          <div id="carouselUtilityRadar" className="carousel slide card" data-ride="carousel">
            <div className='banner'><i className="material-icons browser-dots">more_horiz</i></div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src='utilityradar1.png' alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="utilityradar2.png" alt="Second slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselUtilityRadar" role="button" data-slide="prev">
              <i className="material-icons arrows">keyboard_arrow_left</i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselUtilityRadar" role="button" data-slide="next">
              <i className="material-icons arrows">keyboard_arrow_right</i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

    )
  }
}

export default UtilityRadar
