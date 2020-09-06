import React, {
  FC,
  createRef,
  useEffect,
  useContext,
  useCallback
} from 'react';
import { IconType } from 'react-icons/lib';

import { DropdownContext } from 'contexts/DropdownContext';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './DropdownActionsOptions.styles';

interface Options {
  label: string;
  active?: boolean | false;
  id: string | number;
  Icon?: IconType | undefined;
}

interface Props {
  options: Array<Options>;
  handleClick(id: string | number): any;
}

export type OptionsDropdownActionsType = Options;

const DropdownActionsOptions: FC<Props> = ({ options, handleClick }) => {
  const wrapperRef = createRef<HTMLDivElement>();
  const { isOpen, setIsOpen } = useContext(DropdownContext);

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
  }, [handleClickOutside, isOpen]);

  const onClickHandler = (id: string | number) => {
    handleClick(id);
  };

  return isOpen ? (
    <Styled.Container ref={wrapperRef}>
      {options.map(({ id, label, Icon }) => (
        <Styled.WrapperRow onClick={() => onClickHandler(id)}>
          {Icon && <Icon size='20px' color={COLORS.white} />}
          <Text
            style={{ marginLeft: SPACING.nano }}
            size='regular'
            fontWeight='medium'
            color={COLORS.white}
          >
            {label}
          </Text>
        </Styled.WrapperRow>
      ))}
    </Styled.Container>
  ) : (
    <></>
  );
};

export default DropdownActionsOptions;
