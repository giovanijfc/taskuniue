import styled from 'styled-components';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import { VscMenu } from 'react-icons/vsc';

export const Container = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 6px 2px ${COLORS.gray300};
  z-index: 3;
`;

export const WrapperOptionMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 44px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const WrapperAround = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 ${SPACING.huge} 0 7.5%;
  justify-content: space-between;
  border: 0;
  outline: 0;
`;

export const WrapperProfiles = styled.div`
  display: flex;
`;

export const StyledTextMenu = styled(Text).attrs({
  fontWeight: 'regular',
  fontSize: 'regular',
  color: COLORS.gray600
})`
  margin-left: ${SPACING.high};
  margin-bottom: 0.4px;
`;

export const MenuIcon = styled(VscMenu).attrs({ size: '26px' })<{
  isOpen: boolean;
}>`
  color: ${COLORS.gray600};
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: all 0.5s;

  :hover {
    color: ${COLORS.gray900};
  }
`;
