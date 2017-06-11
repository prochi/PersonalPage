import React, {Component} from 'react';
import {connect} from 'react-redux';

class Form extends Component {

  render() {
    return (
      <form>
        <div className="one-third">
          <input
            type="text"
            name="senderName"
            id="senderName"
            placeholder="name"
          />
				  <input
            type="email"
            name="senderEmail"
            id="senderEmail"
            placeholder="e-mail"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="two-third">
				  <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
          />
				  <button type="submit">
            Send Message
          </button>
        </div>
      </form>
    );
  }
}

export default Form;