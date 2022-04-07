import React from 'react';
import { useTheme } from 'styled-components';
import empty from '../../../assets/empty.png';
import Text from '../../atoms/Text';

import { Container, Image } from './styles';

type EmptyContent = {
  text: string;
};

const EmptyContent = ({ text }: EmptyContent): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Image source={empty} />
      <Text style={{ textAlign: 'center' }} color={theme.colors.placeholder}>
        {text}
      </Text>
    </Container>
  );
};

export default EmptyContent;
