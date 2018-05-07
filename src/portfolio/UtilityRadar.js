import React, { Component } from 'react'

class UtilityRadar extends Component {
  render (){
    return (
      <div className={"row project " + (this.props.klass ? 'invisible' : '')} style={this.props.style}>
        <div className="col-lg-5">
          <div id="carouselExampleControls" className="carousel slide card" data-ride="carousel">
            <div className='banner'><i className="material-icons browser-dots">more_horiz</i></div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src='utilityradar1.png' alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="utilityradar2.png" alt="Second slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-lg-7 text-left project-info">
          <div className='row'>
            <div>
              <img src='utility-icon.png' className="utility-icon"/>
            </div>
            <div className='text-left'>
              <h4><a href='http://www.utilityradar.com' target="_blank">Utility Radar</a></h4>
              <h5>Front-end Developer</h5>
            </div>

          </div>

          <p>Donec hendrerit aliquet augue. In vitae sodales sem. In hac habitasse platea dictumst. Sed eu libero nisi. Mauris vitae condimentum metus. Mauris sit amet velit bibendum, consequat enim eu, porttitor neque. Aliquam quis maximus sapien. Curabitur tristique at nisi et ultricies. Mauris pretium sit amet justo non placerat. Maecenas sit amet nunc molestie, tincidunt nisi in, aliquet neque. Ut dignissim leo sit amet orci varius, non laoreet felis lobortis. Etiam efficitur felis et augue vehicula elementum. Ut sed tellus sem.</p>
        </div>
      </div>
    )
  }
}

export default UtilityRadar
