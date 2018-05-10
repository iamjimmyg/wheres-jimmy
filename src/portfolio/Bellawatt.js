import React, { Component } from 'react'

class Bellawatt extends Component {
  constructor(props){
    super(props)
    this.state = {
      bellawatt1: 'bellawatt1low.png'
    }
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({ bellawatt1: 'bellawatt1.png' })
    },50)
  }

  render (){
    return (
        <div>
          <div id="carouselBellawatt" className="carousel slide card" data-ride="carousel">
            <div className='banner'><i className="material-icons browser-dots">more_horiz</i></div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src={this.state.bellawatt1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="bellawatt2.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="image" src="bellawatt3.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselBellawatt" role="button" data-slide="prev">
              <i className="material-icons arrows">keyboard_arrow_left</i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselBellawatt" role="button" data-slide="next">
              <i className="material-icons arrows">keyboard_arrow_right</i>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>

    )
  }
}

export default Bellawatt
