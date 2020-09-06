import styled from 'styled-components';

import SPACING from 'styles/guides/spacing';
import COLORS from 'styles/guides/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${SPACING.small};
  background: ${COLORS.white};
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
