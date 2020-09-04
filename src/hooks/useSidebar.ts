import { useLayoutEffect, useState, useCallback } from 'react';

interface ReturnType {
  isOpen: boolean;
  open(): void;
  close(): void;
}

export type SideBarType = ReturnType;

export default function useSidebar(initialIsOpen: boolean): ReturnType {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  useLayoutEffect(() => {
    if (isOpen !== initialIsOpen) {
      setIsOpen(initialIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { isOpen, open, close };
}
