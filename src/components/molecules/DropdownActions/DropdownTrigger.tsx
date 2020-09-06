import React, { FC } from 'react';

import { DropdownContext } from 'contexts/DropdownContext';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const DropdownTrigger: FC<Props> = ({ children }) => (
  <DropdownContext.Consumer>
    {({ setIsOpen }) => (
      <Styled.Container
        onClick={() => setIsOpen && setIsOpen(prevIsOpen => !prevIsOpen)}
      >
        {children}
      </Styled.Container>
    )}
  </DropdownContext.Consumer>
);

export default DropdownTrigger;
