import React, {Component} from 'react';
import ContactFormContainer from './ContactFormContainer';
import Form from './Form';

class ContnactForm extends Component {

  render() {
    return (
      <ContactFormContainer>
        <h4>Send us a message</h4>
        <Form/>
      </ContactFormContainer>
    );
  }
}

export default ContnactForm;