import styled from 'styled-components';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: ${SPACING.small};
  margin-left: 8px;
  background: ${COLORS.gray700};
  border-radius: 8px;
  border-top-left-radius: 0px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${SPACING.nano};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    background: ${COLORS.gray600};
  }
`;
