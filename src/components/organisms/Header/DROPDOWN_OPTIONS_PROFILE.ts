import { AiOutlineLogout } from 'react-icons/ai';

import { OptionsDropdownActionsType } from 'components/molecules/DropdownActions/DropdownActionsOptions';

const dropdownColumnsOptions: Array<OptionsDropdownActionsType> = [
  {
    id: 'LOGOUT',
    label: 'Sair',
    Icon: AiOutlineLogout
  }
];

export default dropdownColumnsOptions;
