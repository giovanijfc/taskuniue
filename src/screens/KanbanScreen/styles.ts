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

export const WrapperButtonAddTask = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${SPACING.small};
  background: ${COLORS.white};
  border-radius: 8px;
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
