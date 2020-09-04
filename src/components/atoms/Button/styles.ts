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

  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || '#CDC'};
  }
`;
