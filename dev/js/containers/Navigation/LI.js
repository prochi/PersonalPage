import styled from 'styled-components';

const LI = styled.li`
  background: linear-gradient(to bottom, #2c383c 0%,#2a363a 100%);
  border-bottom: 1px solid #222b2e;
  position: relative;
  list-style: none;

  a { 
    color: #d1d1d1;
    display: table;
    font-size: 17px;
    padding: 23.7px 25px;
    position: relative;
    text-align: right;
    width: 100%;

    &:hover { 
      color: #2c383c !important;
    };
  }

  &:before {
    background-color: #ffd42d;
    bottom: 0;
    height: 100%;
    left: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    content: ' ';
  }

  &.active:before, &:hover:before {
    left: 0;
    transition: all .3s ease-in-out;
  }

   &.active a {
    color: #2c383c !important;
  }

`;

export default LI;