import styled from 'styled-components';

const getFontSize = (
  extraSmall?: boolean,
  small?: boolean,
  extraRegular?: boolean,
  regular?: boolean,
  extraHigh?: boolean,
  high?: boolean
): string => {
  if (extraSmall) {
    return '0.3em';
  } else if (small) {
    return '0.6em';
  } else if (extraRegular) {
    return '1.2em';
  } else if (regular) {
    return '0.9em';
  } else if (extraHigh) {
    return '1.8em';
  } else if (high) {
    return '1.5em';
  }

  return '2.5em';
};

const getFontWeight = (bold?: boolean, semiBold?: boolean): any => {
  if (bold) {
    return {
      'font-weight': 'bolder',
      'font-family': 'SofiaProBlack'
    };
  } else if (semiBold) {
    return {
      'font-weight': 'normal',
      'font-family': 'Sofia Pro'
    };
  } else {
    return {
      'font-weight': 'initial',
      'font-family': 'Sofia'
    };
  }
};

const Text = styled.label<{
  extraSmall?: boolean;
  small?: boolean;
  extraRegular?: boolean;
  regular?: boolean;
  extraHigh?: boolean;
  high?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  color?: string;
}>`
  font-size: ${({
    extraSmall,
    small,
    extraRegular,
    regular,
    extraHigh,
    high
  }) => getFontSize(extraSmall, small, extraRegular, regular, extraHigh, high)};
  color: ${({ color }) => color || 'black'};
  font-weight: ${({ bold, semiBold }) => getFontWeight(bold, semiBold)};
  font-weight: normal;
`;

export default Text;
