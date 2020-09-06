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

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${SPACING.default};
`;

export const WrapperButtonsOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const WrapperColumns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${SPACING.default};
  padding-bottom: ${SPACING.small};
  padding-left: ${SPACING.default};
  overflow-x: auto;
`;
