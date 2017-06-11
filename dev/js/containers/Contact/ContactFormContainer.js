import styled from 'styled-components';

const ContactFormContainer= styled.div`
  animation: fadeInUp 1s;

  h4 {
    color: #2c383c;
    font-size: 24px;
    font-weight: 300;
    margin: 0px;
  } 

  form {
    float: left;
    margin: 20px 0;

    .one-third {
      float: left;
      padding-left: 15px;
      padding-right: 15px;
      position: relative;
      min-height: 1px;
      width: 33.33333333333333%;
    }
    .two-third {
      float: left;
      padding-left: 15px;
      padding-right: 15px;
      position: relative;
      min-height: 1px;
      width: 66.66666666666666%;
    }
    input {
      border: 1px solid #ededed;
      border-radius: 4px;
      color: inherit;
      font: inherit;
      font-size: 12px;
      height: 52px;
      margin-bottom: 10px;
      padding: 0 18px;
      width: 100%;
    }
    textarea { 
      border: 1px solid #ededed;
      border-radius: 4px;
      color: inherit;
      font: inherit;
      font-size: 12px;
      height: 176px;
      margin-bottom: 18px;
      padding: 15px 18px;
      width: 100%;
    }
    button {
      background: #ffd42d;
      border: none;
      border-radius: 4px;
      color: #4e503b;
      font-size: 13px;
      float: right;
      height: 43px;
      width: 120px;
    }
  }
`;

export default ContactFormContainer;