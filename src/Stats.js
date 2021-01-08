import React, { Component } from 'react';

class Stats extends Component {

  render() {
    let skill = function(name, percent){
      return <div className='skill-border'>
        <div className=''>
          <p className='tech-name'>{name}</p>
          <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated'
              role="progressbar"
              style={{maxWidth: percent}}
              aria-valuenow={percent}
              aria-valuemin="0" aria-valuemax="100">
              {/* <span className="title">{percent}</span> */}
            </div>
          </div>
        </div>
      </div>
    }
    return (
      <div className={'stats ' + this.props.klass} style={this.props.style}>
        <h4 className='text-center'>SKILLSET</h4>
        {skill('JAVASCRIPT', '95%')}
        {skill('REACT', '95%')}
        {skill('HTML', '95%')}
        {skill('SCSS', '90%')}
        {skill('NODE', '83%')}
        {skill('RUBY ON RAILS', '65%')}
        {skill('GRAPHQL', '85%')}

      </div>
    )
  }
}

export default Stats;
