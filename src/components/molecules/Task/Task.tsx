import React from 'react';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

const Task = ({ data, isDragging }) => {
  return (
    <Styled.Container isDragging={isDragging}>
      <Text fontSize='extraRegular' fontWeight='semiBold'>
        {data.title}
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
        fontSize='small'
        fontWeight='semiBold'
      >
        {data.description}
      </Text>

      <Text
        style={{ letterSpacing: '1px', marginTop: SPACING.small }}
        fontSize='extraSmall'
        fontWeight='bold'
        color={COLORS.gray300}
      >
        PROGRESSO
      </Text>

      <div>
        <Styled.ProgressLine percent={data.progress} />
        <Text
          style={{ letterSpacing: '1px', marginLeft: SPACING.default }}
          fontSize='small'
          fontWeight='bold'
          color={COLORS.gray400}
        >
          {data.progress} %
        </Text>
      </div>
    </Styled.Container>
  );
};

export default Task;
