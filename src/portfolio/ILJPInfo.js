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

          <p>Demo search tool for finding specific companies serving the utility industry. </p>
          <ul>
            <li>Translated InVision UX designs to front-end code using React/Redux, SCSS, Handsontable, and Chart.js</li>
            <li>Integrated a watchlist to add favorite companies with a print ready template.</li>
          </ul>
        </div>
    )
  }
}

export default ILJPInfo
