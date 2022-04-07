import React from 'react';
import { useTheme } from 'styled-components';
import nosignal from '../../../assets/nosignal.png';
import ButtonOutline from '../../atoms/ButtonOutline';
import Text from '../../atoms/Text';
import { Container, Image, ViewButtons } from './styles';

type ErroConnectProps = {
  onPress: () => void;
  loading: boolean;
};

const ErroConnect = ({ onPress, loading }: ErroConnectProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Image source={nosignal} />
      <Text style={{ textAlign: 'center' }} color={theme.colors.placeholder}>
        Erro de conexão
      </Text>
      <ViewButtons>
        <ButtonOutline loading={loading} textColor={theme.colors.primary} onPress={onPress}>
          Tentar novamente
        </ButtonOutline>
      </ViewButtons>
    </Container>
  );
};

export default ErroConnect;
