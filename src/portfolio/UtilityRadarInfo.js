import React, { Component } from 'react'

class UtilityRadarInfo extends Component {
  render (){
    return (

        <div className="text-left project-info">
          <div className='row'>
            <div>
              <img alt='' src='utility-icon.png' className="utility-icon"/>
            </div>
            <div className='text-left'>
              <h4><a href='http://www.utilityradar.com' target="_blank">Utility Radar</a></h4>
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

export default UtilityRadarInfo
