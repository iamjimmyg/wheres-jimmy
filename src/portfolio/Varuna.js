import React, { Component } from 'react'

class Varuna extends Component {

  render (){
    return (
      <div data-toggle="modal" data-target=".varuna-modal">

        <div id="carouselVaruna" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className='image' src='varuna2.png' alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className='image' src='varuna1.png' alt="Second slide"/>
            </div>
            {/* <div className="carousel-item">
              <img className='image' src='dashboard-view.png' alt="Third slide"/>
            </div> */}
          </div>
          <a className="carousel-control-prev" href="#carouselVaruna" role="button" data-slide="prev">
            <i className="material-icons arrow-left">keyboard_arrow_left</i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselVaruna" role="button" data-slide="next">
            <i className="material-icons arrow-right">keyboard_arrow_right</i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default Varuna
