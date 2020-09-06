import React from 'react';

import * as Styled from './styles';

import { FontGuideTypes } from 'styles/guides/font';

interface Props {
  style?: React.CSSProperties | undefined;
  IconLeft: JSX.Element | undefined;
  IconRight?: JSX.Element | undefined;
  placeholder?: string | undefined;
  placeholderColor?: string | undefined;
}

const Input: React.FC<FontGuideTypes & Props> = ({
  IconLeft,
  IconRight,
  placeholder,
  color,
  fontWeight,
  fontSize,
  placeholderColor,
  ...propsContainer
}) => (
  <Styled.Container {...propsContainer}>
    {IconLeft && IconLeft}

    <Styled.Input
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      placeholder={placeholder}
      placeholderColor={placeholderColor}
    />

    {IconRight && IconRight}
  </Styled.Container>
);

export default Input;
