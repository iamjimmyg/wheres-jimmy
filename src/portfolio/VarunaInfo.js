import React, { Component } from 'react'

class VarunaInfo extends Component {
  render (){
    return (
      <div className="text-left project-info">
        <div className='row '>
          <div>
            <img alt='' className='varuna-icon' src='varuna-icon.png'/>
          </div>
          <div className='text-left'>
            <h4><a href='http://www.varunaiot.com' target="_blank">Varuna</a></h4>
            <h5>Full Stack Developer</h5>
          </div>
        </div>

        <p>Water distribution system monitoring application that allows for real-time monitoring of chlorine residual levels using Varuna's sensors and software track system behavior that predict operational issues, enabling operations to optimize workflows.</p>
        <ul>
          <li>Designed and developed initial MVP using React.js, Express.js, GraphQL, MongoDB, and deployed using Heroku and GoDaddy.</li>
          <li>Developed and translated UX designers wireframes using React.js and SCSS. Assisted backend developer in migrating data from MongoAtlas to AWS. </li>
        </ul>
      </div>
    )
  }
}

export default VarunaInfo
