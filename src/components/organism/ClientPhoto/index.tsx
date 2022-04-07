import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../../atoms/Icon';
import { Container, Image, Button } from './styles';

type ClientPhotoProps = {
  uri: string;
  onPress: () => void;
};

const ClientPhoto = ({ uri, onPress }: ClientPhotoProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <Image
        source={{
          uri,
        }}
      />
      <Button activeOpacity={0.9} onPress={onPress}>
        <Icon color={theme.colors.white} name="camera-alt" size={35} />
      </Button>
    </Container>
  );
};

export default ClientPhoto;
