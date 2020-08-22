import styled from 'styled-components';

import lgbgImg from '../../assets/images/lgbg.jpg';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background: url(${lgbgImg});
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .img {
    position: absolute;
    top: -50px;
    left: 198px;
  }
`;
