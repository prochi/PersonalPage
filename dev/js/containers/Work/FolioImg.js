import styled from 'styled-components';

const FolioImg = styled.div`
  position: relative;

  img {
    display: block;
    height: 168px;
    width: 100%;
  }

  & div {
    visibility: hidden;
  }

  &:hover div {
    visibility: visible;
  }

  &:before {
    background: #ffd42d;
    content: ' ';
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: all .3s ease-in-out;
    
    width: 100%;
  }

  &:hover:before {
    opacity: 0.8;
    transition: all .3s ease-in-out;
  }

`;

export default FolioImg;