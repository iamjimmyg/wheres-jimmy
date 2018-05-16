import React, { Component } from 'react'

class AOP extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     aop1: 'aop1.png'
  //   }
  // }

  // componentWillMount(){
  //   setTimeout(()=>{
  //     this.setState({ aop1: 'aop1.png' })
  //   },0)
  // }

  render (){
    return (
      <div data-toggle="modal" data-target=".aop-modal">

        <div id="carouselAOP" className="carousel slide card" data-ride="carousel">
          <div className='banner'>
            <i className="material-icons browser-dots">more_horiz</i>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className='image' src='aop1.png' alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className='image' src='aop2.jpg' alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className='image' src='aop3.jpg' alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselAOP" role="button" data-slide="prev">
            <i className="material-icons arrows">keyboard_arrow_left</i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselAOP" role="button" data-slide="next">
            <i className="material-icons arrows">keyboard_arrow_right</i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

    )
  }
}

export default AOP
