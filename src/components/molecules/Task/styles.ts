import styled from 'styled-components';

import { Line } from 'rc-progress';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Container = styled.div<{ isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: solid ${COLORS.gray100} 1px;
  user-select: none;
  transition: transform 0.2s;
  margin-top: ${SPACING.default};

  ${({ isDragging }) => {
    if (isDragging) {
      return cardHoverAndDraggingStyle;
    }

    return {
      'padding-bottom': SPACING.high
    };
  }};

  &:hover {
    ${() => cardHoverAndDraggingStyle}
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

const cardHoverAndDraggingStyle = {
  transform: 'scale(1.1)',
  'background-color': COLORS.backgroundLight,
  padding: SPACING.default,
  'box-shadow': `6px 6px 6px 2px ${COLORS.gray300}`
};
