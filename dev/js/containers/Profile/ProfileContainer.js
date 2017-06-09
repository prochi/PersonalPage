import styled from 'styled-components';

const ProfileContainer = styled.div`
  background: #fff;
  float: left;
  padding: 20px 30px 15px;

  & h2 {
    animation: fadeInDown 1s;
    color: #606060;
    font-size: 32px;
    font-weight: 300;
    line-height: 36px;
    margin: 0px;
  };

  & h2 span {
    color: #000;
    font-weight: 700;
  };

  & p {
    animation: fadeInDown 1s;
  };
`;

export default ProfileContainer;