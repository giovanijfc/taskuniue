import React, { SetStateAction, Dispatch } from 'react';

export interface DropdownContextType {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined;
}

const dropdownContext: DropdownContextType = {
  isOpen: false,
  setIsOpen: undefined
};

export const DropdownContext = React.createContext(dropdownContext);
