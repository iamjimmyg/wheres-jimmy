import React, { Component } from 'react'

class AOPInfo extends Component {
  render (){
    return (
      <div className="text-left project-info">
        <div className='row '>
          <div>
            <img className='nnsa-icon' src='nnsa-icon.png'/>
          </div>
          <div className='text-left'>
            <h4>AOP [Redacted]</h4>
            <h5>Full Stack Developer</h5>
          </div>
        </div>

        <p>Budgeting app for the US National Nuclear Security Administration. The original process was driven by Excel spreadsheets, which we redesigned the workflow into a streamlined data collection and reporting web application. This is an internal enterprise web app so it naturally can't be shared with the public.</p>
        <ul>
          <li>Translated and enhanced UX designs to clean reusable code using a combination of React, Ruby, Bootstrap, SCSS.</li>
          <li>Maintained and contributed to existing Ruby on Rails code to improve performace and expand features using test-driven development.</li>
        </ul>
      </div>
    )
  }
}

export default AOPInfo
