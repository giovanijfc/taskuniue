import styled from 'styled-components';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${COLORS.background};
  padding: 60px ${SPACING.huge} ${SPACING.default} ${SPACING.huge};
`;

export const WrapperBoardLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${SPACING.large};
  padding-bottom: ${SPACING.small};
  overflow-x: auto;
`;

export const WrapperBoard = styled.div<{ index: number }>`
  height: 100%;
  width: 30%;
  min-width: 22%;
  background: ${COLORS.white};
  border-radius: 8px;
  margin-left: ${({ index }) => (index > 0 ? SPACING.small : '0px')};
`;
