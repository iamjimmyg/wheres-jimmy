import React, { Component } from 'react'

class VarunaInfo extends Component {
  render (){
    return (
      <div className="text-left project-info">
        <div className='row '>
          <div>
            <img className='varuna-icon' src='varuna-icon.png'/>
          </div>
          <div className='text-left'>
            <h4><a href='http://www.varunaiot.com' target="_blank">Varuna</a></h4>
            <h5>Full Stack Developer</h5>
          </div>
        </div>

        <p>water shit application that allows for multiple currencies, and allows for an assistant signup with limited capabilities compared to admin.</p>
        <ul>
          <li>Designed and developed front-end using React.js, Apollo, Webpack, React-Motion, Chart.js and SCSS.</li>
          <li>Designed and developed back-end using Node.js, Express.js, GraphQL, MongoDB, and deployed using Heroku and GoDaddy.</li>
        </ul>
      </div>
    )
  }
}

export default VarunaInfo
