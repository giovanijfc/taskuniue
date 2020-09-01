import styled from 'styled-components';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import { IoIosMore } from 'react-icons/io';

export const Container = styled.div<{ index: number }>`
  min-width: 18%;
  background: ${COLORS.white};
  border-radius: 8px;
  margin-left: ${({ index }) => (index > 0 ? SPACING.small : '0px')};
  padding: ${SPACING.small} ${SPACING.default} ${SPACING.small}
    ${SPACING.default};
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACING.default};
`;

export const IconMoreOptions = styled(IoIosMore).attrs({
  size: '24px'
})`
  cursor: pointer;
  color: ${COLORS.gray500};
  transition: all 0.5s;

  &:hover {
    color: ${COLORS.gray900};
    height: 30px;
    width: 30px;
  }
`;
