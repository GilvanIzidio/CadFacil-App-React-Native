import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../Icon';
import { Container } from './styles';

type ModalIconTypeProps = {
  type: 'danger' | 'success';
};

const ModalIconType = ({ type }: ModalIconTypeProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container type={type}>
      <Icon color={theme.colors.white} size={35} name={type === 'success' ? 'check' : 'close'} />
    </Container>
  );
};

export default ModalIconType;
