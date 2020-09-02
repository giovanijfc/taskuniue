import styled from 'styled-components';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';
import Text from 'components/atoms/Text/Text';

export const Container = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '250px' : '0px')};
  display: flex;
  flex-direction: column;
  padding-top: 85px;
  background-color: ${COLORS.white};
  transition: all 0.5s;
`;

export const WrapperItemSidebar = styled.div<{ selected: boolean }>`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: ${SPACING.default};
  background-color: ${({ selected }) =>
    selected ? COLORS.primary : COLORS.white};
  cursor: pointer;
`;

export const WrapperIcon = styled.div`
  width: 40px;
  display: flex;
  justify-self: center;
  align-self: center;
`;

export const WrapperText = styled.div`
  width: 70px;
`;

export const TextItem = styled(Text)`
  cursor: pointer;
`;
