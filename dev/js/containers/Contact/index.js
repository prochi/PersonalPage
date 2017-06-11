import React from 'react';
import PageHead from '../../components/PageHead';
import ContactContainer from './ContactContainer';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => (
  <ContactContainer>
    <PageHead>
      <h3>Contact</h3>
    </PageHead>
    <ContactInfo>
      <h4>Contact Info</h4>
      <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
    </ContactInfo>
    <ContactForm />
  </ContactContainer>
);

export default Contact;