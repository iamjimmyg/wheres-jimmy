import React, { Component } from 'react';
import Stats from './Stats'

class About extends Component {
  render() {
    return (
      <section className="container" id='about'>
        <h1 className="text-center">About</h1>
        <div className="row icon-section text-center">
          <div className="col-md-4">
            <div><i class="material-icons">important_devices</i></div>
            <h5>Responsive</h5>
            <p>Shit is responsive as fuck yo in any browser</p>
          </div>
          <div className="col-md-4 ">
            <div><i class="material-icons">lightbulb_outline</i></div>
            <h5>Intuitive</h5>
            <p>You'll shit your brains when you see how intuitive I am with this shit</p>
          </div>
          <div className="col-md-4">
            <i class="material-icons">timeline</i>
            <h5>Performance</h5>
            <p>Perforance will be at an all time mother fuckin high</p>
          </div>

        </div>

        <div className="row about-me-content">
          <div className="col-sm-5 text-center ">
            <div className="hexa">
              <div className="hex1">
                <div className="hex2">
                  <img src="profilepic.jpg" />
                </div>
              </div>
            </div>
            <div className="bio">
              <p>Hey I'm Jimmy Gonzalez, I'm a sick as full-stack developer, checkout my shit, I can make websites while high as shit</p>
            </div>
          </div>
          <div className="col-sm-7">
            <Stats />
          </div>

        </div>

      </section>
    );
  }
}

export default About;
