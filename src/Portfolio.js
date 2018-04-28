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
        <div className="container cards">
          <div className="row">
            <div className='card-flip col-lg nopadding'>
              <div className='front'>

                <span className='name'>bellaWatt</span>
                <br/>
                <span className='job'> - front-end web developer - </span>
              </div>
              <div className='back'>
                <span>Skills:</span>
                <p>HTML, CSS, Javascript. UX/UI designer</p>
                <span>Social media </span>
              </div>
            </div>
            <div className='card-flip col-lg nopadding'>
              <div className='front'>

                <span className='name'>Grey Wolf</span>

                <span className='job'> - front-end web developer - </span>
              </div>
              <div className='back'>
                <span>Skills:</span>
                <p>HTML, CSS, Javascript. UX/UI designer</p>
                <span>Social media </span>
              </div>
            </div>
            <div className='card-flip col-lg nopadding col-md justify-content-center'>
              <div className='front'>

                <span className='name'>Grey Wolf</span>

                <span className='job'> - front-end web developer - </span>
              </div>
              <div className='back'>
                <span>Skills:</span>
                <p>HTML, CSS, Javascript. UX/UI designer</p>
                <span>Social media </span>
              </div>
            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default Portfolio;
