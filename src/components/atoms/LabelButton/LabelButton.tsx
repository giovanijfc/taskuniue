import React from 'react';

import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

interface CustomProps {
  backgroundColor?: string | undefined;
  hoverBackgroundColor?: string | undefined;
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode | undefined;
}

type Props = CustomProps;

const LabelButton: React.FC<Props> = ({
  backgroundColor,
  hoverBackgroundColor,
  label,
  children: childrenButton,
  ...propsContainer
}) => (
  <Styled.Container {...propsContainer}>
    <Text
      style={{ marginRight: SPACING.high }}
      fontWeight='medium'
      fontSize='regular'
      color={COLORS.gray600}
    >
      {label}
    </Text>
    <Button
      hoverBackgroundColor={COLORS.primaryHover}
      backgroundColor={COLORS.primary}
    >
      {childrenButton}
    </Button>
  </Styled.Container>
);

export default LabelButton;
