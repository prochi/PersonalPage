import styled from 'styled-components';

const ResumeInfo = styled.div`
  animation: slideInLeft 1s;

  & h4 {
    color: #2c383c;
    font-size: 24px;
    font-weight: 300;
    margin: 0px;
    margin-top: 20px;
  }

  & h5 {
    color: #2c383c;
    font-size: 16px;
    font-weight: bold;
  }

  & p {
    margin: 0px;
    color: #828282;
    font-size: 15px;
    line-height: 24px;
    margin-top: 5px;
  }

  & span {
    color: #2c383c;
  }

  & ul {
    margin-top: -15px;
    padding: 0px;
  }

  & ul li {
    border-bottom: 1px solid #ededed;
    list-style: none;
    margin: 0px;
    padding: 15px 0 20px;
  }

`;

export default ResumeInfo;