import styled from 'styled-components';

const UlFilter = styled.ul`
  display: block;
  margin: 30px 10px;
  padding: 0px;
  width: 100%;

  li {
    color: #b1b1b1;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    line-height: 35px;
    margin: 0px;
    padding: 0px 15px;
    width: auto;

    &:hover, &.active {
      color: #2c383c;
      background: #ffd42d;
    }
  };

`;

export default UlFilter;