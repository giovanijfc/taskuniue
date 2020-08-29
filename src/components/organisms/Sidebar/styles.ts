import styled from 'styled-components';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Container = styled.div`
  width: 280px;
  height: 100%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background-color: ${COLORS.white};
`;

export const WrapperItemSidebar = styled.div<{ selected: boolean }>`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: ${SPACING.default};
  background-color: ${({ selected }) =>
    selected ? COLORS.primary : COLORS.white};
`;

export const WrapperIcon = styled.div`
  width: 18%;
  display: flex;
  justify-self: center;
  align-self: center;
`;

export const WrapperText = styled.div`
  width: 18%;
`;
