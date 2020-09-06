import React, { FC, useState, useEffect } from 'react';

import { DropdownContext } from 'contexts/DropdownContext';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const DropdownActions: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <Styled.Container>{children}</Styled.Container>
    </DropdownContext.Provider>
  );
};

export default DropdownActions;
