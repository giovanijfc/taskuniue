import React from 'react';

import * as Styled from './styles';

export interface Props {
  backgroundColor?: string | undefined;
  hoverBackgroundColor?: string | undefined;
}

const Button: React.FC<Props> = ({
  backgroundColor,
  hoverBackgroundColor,
  children
}) => (
  <Styled.Container
    hoverBackgroundColor={hoverBackgroundColor}
    backgroundColor={backgroundColor}
  >
    {children}
  </Styled.Container>
);

export default Button;
