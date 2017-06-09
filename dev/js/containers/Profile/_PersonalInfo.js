import styled from 'styled-components';

const _PersonalInfo = styled.div`
  animation: flipInX 1s;
  border-top: 1px solid #ececec;
  float: left;
  padding: 0px;
  margin-top: 15px;
  width: 100%;

  & h4 {
    color: #2c383c;
    font-size: 24px;
    font-weight: 300;
    margin: 25px 0 0;
  };

  & ul {
    padding: 0px;
  };

  & li {
    border: 1px solid #ededed;
    float: left;
    height: 43px;
    list-style: none;
    margin-right: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  };

  & li em {
    color: #9b9b9b;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    padding: 0 15px;
  }

  & li span {
    background: #f6f6f6;
    border-left: 1px solid #ededed;
    color: #484848;
    font-size: 16px;
    font-weight: 400;
    line-height: 42px;
    padding: 11px 15px;
  }
`;

export default _PersonalInfo;