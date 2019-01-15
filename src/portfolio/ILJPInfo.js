import React, { Component } from 'react'

class ILJPInfo extends Component {
  render (){
    return (

        <div className="text-left project-info">
          <div className='row'>
            <div>
              <img src='iljp-icon.png' className="iljp-icon"/>
            </div>
            <div className='text-left'>
              <h4><a href='https://www.chamberofcommerce.org/' target="_blank">ChamberOfCommerce.org</a></h4>
              <h5>WordPress Developer</h5>
            </div>

          </div>

          <p>WordPress site dedicated to information regarding the creation of a small business can help people plan wisely and avoid common pitfalls.</p>
          <ul>
            <li>Designed and developed WordPress site using JavaScript, CSS, and Elementor.</li>
            <li>Customized themes and created easy to add articles to meet customer's requirements.</li>
          </ul>
        </div>
    )
  }
}

export default ILJPInfo
