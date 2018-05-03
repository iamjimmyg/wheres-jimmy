import React, { Component } from 'react'


class Portfolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      front: true,
    }

    this.handleCard = this.handleCard.bind(this)
  }

  handleCard(event){
    this.setState({front: !this.state.front})
  }

  render() {
    return (
      <section className="text-center" id='portfolio'>
        <h1>Portfolio</h1>
        <div className="container projects">
          <div className="row project">
            <div className='col-sm-4'>
              <div className="card">

              </div>
            </div>

            <div className="col-sm-8 text-left">
              <h5>bellaWatt</h5>
            </div>
          </div>

          <div className="row project">
            <div className="card">

            </div>
            <div className="col-8 text-left">
              <h5>AOP</h5>
            </div>
          </div>

          <div className="row project">
            <div className="card">

            </div>
            <div className="col-8 text-left">
              <h5>Utility Radar</h5>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Portfolio;
