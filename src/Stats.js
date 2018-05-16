import React, { Component } from 'react';

class Stats extends Component {
  constructor(props){
    super(props)
  }

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
        <h5 className='text-center'>SKILLSET</h5>
        {skill('JAVASCRIPT', '85%')}
        {skill('REACT', '90%')}
        {skill('HTML', '95%')}
        {skill('SCSS', '86%')}
        {skill('NODE', '70%')}
        {skill('RUBY ON RAILS', '65%')}
        {skill('GUITAR', '80%')}

      </div>
    )
  }
}

export default Stats;
