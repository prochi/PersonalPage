import styled from 'styled-components';

const SkillsInfo = styled.div`
  border-bottom: 1px solid #ededed;
  padding-bottom: 20px;

  h4 {
    color: #2c383c;
    font-size: 24px;
    font-weight: 300;
    margin: 0px;
    margin-top: 20px;
  }

  ul {
    padding: 0px;

    & li {
      list-style: none;
      margin-bottom: 2px;

      & p {
        color: #9a9a9a;
        font-size: 13px;
        margin-bottom: 1px;

        & span {
          color: #6a6a6a;
          float: right;
        }
      }
    }
  }
`;

export default SkillsInfo;