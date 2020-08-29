import styled from 'styled-components';
import SPACING from 'styles/guide/SPACING';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: ${SPACING.default};
`;
