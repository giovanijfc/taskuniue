import React from 'react';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guide/COLORS';

import * as Styled from './styles';

import logoIcon from 'assets/icons/logo.svg';

const FallbackLoading = (
  <Styled.Container>
    <Styled.Image src={logoIcon} />
    <Text semiBold color={COLORS.primary} extraRegular>
      Carregando...
    </Text>
  </Styled.Container>
);

export default FallbackLoading;
