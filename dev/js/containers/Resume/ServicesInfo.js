import styled from 'styled-components';

const ServicesInfo = styled.div`
  border-bottom: 1px solid #ededed;
  padding-bottom: 30px;

  & h4 {
    color: #2c383c;
    margin: 0px;
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
  }

  & ul {
    border: 0 solid #ededed;
    border-width: 0 0 1px 1px;
    display: table;
    margin-top: 30px;
    padding: 0px;
    width: 100%;
  }

  & ul li {
    animation: flipInX 1s;
    border: 0 solid #ededed;
    border-width: 1px 1px 0 0;
    cursor: pointer;
    float: left;
    height: 165px;
    list-style: none;
    padding: 35px 15px 20px;
    transition: all .3s ease-in-out;
    width: 33.3333%;
  }

  & ul li:hover {
    background: #ffd42d;
    transition: all .3s ease-in-out;
  }

  ul li:hover h5 {
    background: url(../img/sep-lite.png) no-repeat bottom center;
    color: #fff;
    margin-bottom: 14px;
    padding-bottom: 25px;
    transition: all .3s ease-in-out;
  }

  & ul li h5 {
    color: #c4c4c4;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    transition: all .3s ease-in-out;
  }


`;

export default ServicesInfo;