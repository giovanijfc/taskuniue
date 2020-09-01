import React from 'react';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

const Task = () => {
  return (
    <Styled.Container>
      <Text size='extraRegular' fontWeight='semiBold'>
        Research
      </Text>

      <Text
        style={{
          marginTop: SPACING.nano,
          display: 'block',
          textOverflow: 'ellipsis',
          wordWrap: 'break-word',
          overflow: 'hidden',
          maxHeight: '4.2em',
          lineHeight: '1.4em'
        }}
        color={COLORS.gray400}
        size='small'
        fontWeight='semiBold'
      >
        I need 5 examples of the logo
      </Text>

      <Text
        style={{ letterSpacing: '1px', marginTop: SPACING.small }}
        size='extraSmall'
        fontWeight='bold'
        color={COLORS.gray300}
      >
        PROGRESSO
      </Text>

      <div>
        <Styled.ProgressLine percent={0} />
        <Text
          style={{ letterSpacing: '1px', marginLeft: SPACING.default }}
          size='small'
          fontWeight='bold'
          color={COLORS.gray400}
        >
          0%
        </Text>
      </div>
    </Styled.Container>
  );
};

export default Task;
