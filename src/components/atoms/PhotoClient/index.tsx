import React from 'react';
import { Container, Image } from './styles';

type PhotoClientProps = {
  uri: string;
};

const PhotoClient = ({ uri }: PhotoClientProps): JSX.Element => {
  return (
    <Container>
      <Image source={{ uri }} />
    </Container>
  );
};

export default PhotoClient;
