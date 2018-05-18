import React, { Component } from 'react'

class Bellawatt extends Component {
  render (){
    return (
        <div className="text-left project-info">
          <div className='row'>
            <div>
              <img src='bellawatt.jpg' className="bellawatt-icon"/>
            </div>
            <div className='text-left'>
              <h4><a href='http://www.bellawatt.com' target="_blank">bellaWatt</a></h4>
              <h5>Front-end Developer</h5>
            </div>

          </div>
          <p>Cost of service budgeting app for the US Power Utility Industry</p>
          <ul>
            <li>Designed UX and developed fron-end code using React/Redux, SCSS, Handsontable, and Chart.js</li>
            <li>Developed efficient Handsontable spreadsheet functionality similar to utility industry standard excel spreadsheets</li>
          </ul>
        </div>
    )
  }
}

export default Bellawatt
