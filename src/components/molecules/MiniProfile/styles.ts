import styled from 'styled-components';

import COLORS from 'styles/guides/colors';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageProfile = styled.img`
  width: 60px;
  height: 100%;
  background: ${COLORS.backgroundLight};
  border: 0;
  outline: 0;
  border-radius: 12px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const WrapperLetterProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  background: ${COLORS.tertiary};
  border: 0;
  outline: 0;
  border-radius: 12px;
`;
