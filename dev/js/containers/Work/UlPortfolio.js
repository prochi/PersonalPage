import styled from 'styled-components';

const UlPortfolio = styled.ul`
  display: block;
  padding: 0;
  text-align: center;
  width: 100%;

  & li {
    animation: flipInX 1s both;
    color: #fff;
    display: inline-block;
    font-size: 30px;
    margin-bottom: 12px;
    opacity: 1;
    padding: 0px 10px;
    text-align: center;
    vertical-align: top;
    width: 33.3333%;
  }

  & li a{
    background: #fff;
    display: block;
    max-width: 100%;
    text-decoration: none;
  }

`;

export default UlPortfolio;