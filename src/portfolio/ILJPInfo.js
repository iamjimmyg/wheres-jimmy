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
              <h4><a href='http://www.iljp.org' target="_blank">Illinois Justice Project</a></h4>
              <h5>Front-end Developer</h5>
            </div>

          </div>

          <p>Non-profit website dedicated to advancing policies and practices that reduce violence, decrease prison recidivism and make the justice system more equitable</p>
          <ul>
            <li>Translated wireframe idea into a simple multi-page squarespace site.</li>
            <li>Integrated subscribe form and deployed to godaddy.com</li>
          </ul>
        </div>
    )
  }
}

export default ILJPInfo
