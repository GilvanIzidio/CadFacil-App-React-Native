import React from 'react';
import { Image } from './styles';

type ClientPictureViewProps = {
  uri: string;
};

const ClientPictureView = ({ uri }: ClientPictureViewProps): JSX.Element => (
  <Image
    source={{
      uri,
    }}
  />
);

export default ClientPictureView;
