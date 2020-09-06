import styled from 'styled-components';

import { Props } from './Button';

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || '#CDC'};
    transform: scale(1.1);
  }
`;
