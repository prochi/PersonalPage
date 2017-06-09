import styled from 'styled-components';

const OverlayInner = styled.div`
  bottom: 0px;
  height: 37px;
  left: 0px;
  margin: auto;
  position: absolute;
  right: 0px;
  top: 0px;

  & h4 {
    color: #2c383c;
    font-size: 14px;
    font-weight: bold;
    margin: 0px 0 -3px;
  }

  & p {
    color: #2c383c;
    font-size: 11px;
    font-style: italic;
  }
}
`;

export default OverlayInner;