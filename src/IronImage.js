import React, { Component } from 'react';

class IronImage extends Component {
  constructor(props){
    super(props)
    this.ironImageHd = null;
  }

  componentDidMount() {

    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.srcLoaded;
    hdLoaderImg.onload = () => {
      //this.ironImageHd.setAttribute()
      //   'style',
      //   `background: url('${this.props.srcLoaded}') no-repeat center center fixed`
      // );
      this.ironImageHd.classList.add('iron-image-fade-in');
    }
  }

  render() {

    return (
      <div className='iron-image-container'>
        <div
          style={{
            top: this.props.transformY,
            transform: this.props.backgroundImageStyle,
            background: `url(${this.props.srcLoaded}) no-repeat center center fixed`,
            minHeight: this.props.height,
            backgroundSize: 'cover',
          }}
          className="iron-image-loaded"
          ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>
        </div>

        <div className="iron-image-preload"
          style={{
            top: this.props.transformY,
            transform: this.props.backgroundImageStyle,
            background: `url(${this.props.srcPreload}) no-repeat center center fixed`,
            minHeight: this.props.height,
            backgroundSize: 'cover',
            position: this.props.position,
          }}>
        </div>
      </div>
    )
  }
}

export default IronImage;
