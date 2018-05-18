import React, { Component } from 'react'

class UtilityRadarInfo extends Component {
  render (){
    return (

        <div className="text-left project-info">
          <div className='row'>
            <div>
              <img src='utility-icon.png' className="utility-icon"/>
            </div>
            <div className='text-left'>
              <h4><a href='http://www.utilityradar.com' target="_blank">Utility Radar</a></h4>
              <h5>Front-end Developer</h5>
            </div>

          </div>

          <p>Online search tool for finding specific companies serving the utility industry</p>
          <ul>
            <li>Translated UX designs to front-end code using React/Redux, SCSS, Handsontable, and Chart.js</li>
          </ul>
        </div>
    )
  }
}

export default UtilityRadarInfo
