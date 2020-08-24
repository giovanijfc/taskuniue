import styled from 'styled-components';

import COLORS from 'styles/guide/colors';

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${COLORS.white};
`;

export const WrapperItemSidebar = styled.div<{ selected: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) =>
    selected ? COLORS.primary : COLORS.white};
`;
