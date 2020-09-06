import styled from 'styled-components';

import SPACING from 'styles/guides/spacing';
import COLORS from 'styles/guides/colors';
import { getFontSize, getFontWeight, FontGuideTypes } from 'styles/guides/font';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  border-radius: 30px;
  padding: ${SPACING.small} ${SPACING.default} ${SPACING.small}
    ${SPACING.default};
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input<
  FontGuideTypes & { placeholderColor?: string | undefined }
>`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.background};
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
  border: 0;
  outline: 0;

  &::-webkit-input-placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;
