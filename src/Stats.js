import React, { Component } from 'react';

class Stats extends Component {


  render() {
    let skill = function(name, percent){
      return <div className='skill-border row'>
        <div className='skill col-3'>
          <h5>{name}</h5>
        </div>
        <div className='col-9'>
          <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated'
              role="progressbar"
              style={{maxWidth: percent}}
              aria-valuenow={percent}
              aria-valuemin="0" aria-valuemax="100">
              <span className="title">{percent}</span>
            </div>
          </div>
        </div>
      </div>
    }
    return (
      <div className='container stats'>
        {skill('JavaScript', '85%')}
        {skill('React', '90%')}
        {skill('HTML', '95%')}
        {skill('SCSS', '86%')}
        {skill('Node.js', '70%')}
        {skill('Ruby on Rails', '65%')}
      </div>
    )
  }
}

export default Stats;
