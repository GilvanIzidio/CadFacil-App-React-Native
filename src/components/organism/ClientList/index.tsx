import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import api from '../../../http/api';
import Client from '../../../models/Client';

import PeopleListItem from '../../molecules/PeopleListItem';

type ClientListProps = {
  data: Client[];
  onPress: (item: Client) => void;
};

const ClientList = ({ data, onPress }: ClientListProps): JSX.Element => {
  const renderItem = ({
    item: { name, id, client_code, birthday, photo },
  }: ListRenderItemInfo<Client>) => {
    const urlComplete = `${process.env.API_URL}/files/${photo}`;
    return (
      <PeopleListItem
        name={name}
        birthday={birthday}
        code={client_code}
        onPress={() => onPress({ id, name, client_code, birthday, photo })}
        uri={urlComplete}
      />
    );
  };

  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default ClientList;
