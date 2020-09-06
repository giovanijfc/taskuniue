import styled from 'styled-components';

import { getFontSize, getFontWeight, FontGuideTypes } from 'styles/guides/font';

const Text = styled.label<FontGuideTypes>`
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => getFontWeight(fontWeight)};
`;

export default Text;
