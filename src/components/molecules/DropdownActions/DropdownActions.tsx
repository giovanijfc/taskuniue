import React, { FC, useState, useEffect, createRef, useCallback } from 'react';

import { DropdownContext } from 'contexts/DropdownContext';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const DropdownActions: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = createRef<HTMLDivElement>();

  const handleClickOutside = useCallback(
    event => {
      if (wrapperRef && !wrapperRef?.current?.contains(event.target)) {
        if (isOpen) {
          setIsOpen?.(false);
        }
      }
    },
    [isOpen, setIsOpen, wrapperRef]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <Styled.Container ref={wrapperRef}>{children}</Styled.Container>
    </DropdownContext.Provider>
  );
};

export default DropdownActions;
