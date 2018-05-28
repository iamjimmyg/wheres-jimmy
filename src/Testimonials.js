import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import {Motion, spring} from 'react-motion'
import IronImage from './IronImage'

class ReviewCarousel extends Component {

  render(){
    return (
      <div id="reviewCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#reviewCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#reviewCarousel" data-slide-to="1"></li>
          <li data-target="#reviewCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='flex'>
              <blockquote><h4 className='font-italic'>Jimmy contributed to an existing large, complex project. It was built primarily using Ruby on Rails, with a Dockerized setup for development. Despite the fact that these were completely new technologies for him, Jimmy was able to jump in and get productive really quickly. Our customer for this product has been extremely happy with what we’ve delivered.</h4></blockquote>
              <h4>- BRIAN KNOLES -</h4>
              <h4>HEAD OF SOFTWARE DEVELOPMENT AT BELLAWATT</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className='flex'>
              <blockquote><h4 className='font-italic'>As a young company, we ask Jimmy to do far more than other young developers, and his effort is invaluable - he has had to dig deep into an existing Ruby on Rails/Docker product despite having no previous experience with the framework. Furthermore, as we are a young organization that also happens to be remote, our internal processes are constantly evolving, and yet Jimmy has successfully adapted at every step of the way.</h4></blockquote>
              <h4>- EUGENE GRANOVKY -</h4>
              <h4>FOUNDER OF BELLAWATT</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className='flex'>
              <blockquote><h4 className='font-italic'>Jimmy was the primary developer on several client facing functional demos. With minimal guidance, he delivered and deployed 3 HTML/CSS/JS/React projects. We have been thrilled with the results!</h4></blockquote>
              <h4>- BRIAN KNOLES -</h4>
              <h4>HEAD OF SOFTWARE DEVELOPMENT AT BELLAWATT</h4>
            </div>
          </div>
        </div>
        {/* <a className="carousel-control-prev" href="#reviewCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#reviewCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}
      </div>
    )
  }
}

class Testimonials extends Component {
  constructor(props){
    super(props)
    this.carousel = <ReviewCarousel />
    this.state = {
      reviewCarousel: <div className="content ">
        <h2>Testimonials</h2>
        {this.carousel}
      </div>
    }
    this.handleReview = this.handleReview.bind(this)
  }

  handleReview(){
    this.setState({ reviewCarousel: <Motion defaultStyle={{x: 0, o: 0}} style={{x: spring(0), o: spring(1)}}>
      {value => <div className="content" style={{left: value.x, opacity: value.o, position: 'absolute', width: '100%'}}>
        <h2>Testimonials</h2>
        {this.carousel}
      </div>}
    </Motion>})
    console.log('ooohh shit you just entered the testimonial zone')
  }

  componentDidMount () {

      // window.onscroll =()=>{
      //
      //   if(window.scrollY < window.innerHeight){
      //
      //     // console.log('scroll posish', window.scrollY)
      //     // console.log('window height', window.innerHeight)
      //     let transformY = Math.floor((window.scrollY / window.innerHeight) * 300)
      //     let imageOpacity = (window.scrollY / window.innerHeight) + .1
      //     let imageScale = (((window.scrollY / window.innerHeight) + 1) * .5) + .5
      //
      //     let textOpacity = (window.innerHeight - window.scrollY) / window.innerHeight
      //     //console.log(textOpacity)
      //     let scale = .7 + (((window.innerHeight - window.scrollY) / window.innderHeight) * .3)
      //     this.setState({
      //       imageOpacity: imageOpacity,
      //       imageTransformY: transformY,
      //       scale: scale,
      //       textOpacity: textOpacity,
      //       imageScale: imageScale,
      //     })
      //   }
      // }

  }

  render() {
    //console.log(this.props.scroll)
    return (
      <section className="text-center" id='testimonials'>
        <div className='background-opacity'></div>
        <IronImage
          srcPreload='smartcity_preload.jpg'
          height='500px'
          srcLoaded='../smartcity.jpg'
        />

        {/* <div className="content">
          <h2>Testimonials</h2>
          <ReviewCarousel />
        </div> */}
        {/* <Waypoint onEnter={() => console.log('enter')}
          onLeave={()=>console.log('leave')}
        /> */}
        {this.state.reviewCarousel}

      </section>
    );
  }
}

export default Testimonials;
