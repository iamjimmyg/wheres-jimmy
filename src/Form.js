import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (

      <form className={`${this.props.klass}`} style={this.props.style} id="gform" method="POST" action="https://formspree.io/jimmygonzalez87@gmail.com">
        <input type="hidden" name="_next" value="contactredirect" />
        <div className="form-group">
          <label >Full Name</label>
          <input name="name" type="text" className="form-control" placeholder="John Doe"></input>

        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="john@doe.com"></input>
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input name="subject" type="text" className="form-control" placeholder="..."></input>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="8" placeholder="..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    )
  }

}

export default Form
