import { AiFillDelete } from 'react-icons/ai';

import { OptionsDropdownActionsType } from 'components/molecules/DropdownActions/DropdownActionsOptions';

const dropdownColumnsOptions: Array<OptionsDropdownActionsType> = [
  {
    id: 'DELETE',
    label: 'Excluir',
    Icon: AiFillDelete
  }
];

export default dropdownColumnsOptions;
