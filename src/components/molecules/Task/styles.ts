import styled from 'styled-components';

import { Line } from 'rc-progress';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Container = styled.div<{ isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${SPACING.high};
  border-bottom: solid ${COLORS.gray100} 1px;
  user-select: none;
  transition: transform 0.2s;
  border: ${({ isDragging }) =>
    isDragging ? `2px solid ${COLORS.backgroundHeavy}` : ''};

  &:hover {
    transform: scale(1.1);
    background-color: ${COLORS.background};
    padding: ${SPACING.default};
    box-shadow: 6px 6px 6px 2px ${COLORS.gray300};
  }
`;

export const ProgressLine = styled(Line).attrs({
  strokeWidth: 3,
  trailWidth: 3,
  strokeColor: COLORS.primary,
  trailColor: COLORS.gray300
})`
  width: 60%;
  margin-top: 8px;
  user-select: none;
`;
