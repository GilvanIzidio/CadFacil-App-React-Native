import React from 'react';
import shadowStyle from '../../../styles/shadow';
import ClientPictureView from '../../atoms/ClientPictureView';
import Text from '../../atoms/Text';
import { Container, ViewImage, Content } from './styles';

type PeopleListItemProps = {
  uri: string;
  name: string;
  birthday: string;
  code: string;
  onPress: () => void;
};

const PeopleListItem = ({
  uri,
  name,
  birthday,
  code,
  onPress,
}: PeopleListItemProps): JSX.Element => (
  <Container style={shadowStyle} activeOpacity={0.8} onPress={onPress}>
    <ViewImage>
      <ClientPictureView uri={uri} />
    </ViewImage>
    <Content>
      <Text>Nome: {name}</Text>
      <Text size={15}>Dt.Nasc: {birthday}</Text>
      <Text size={15}>Codigo: {code}</Text>
    </Content>
  </Container>
);

export default PeopleListItem;
