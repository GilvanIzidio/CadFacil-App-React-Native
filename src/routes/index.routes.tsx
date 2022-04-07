import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ClientDetail from '../screens/ClientDetail';
import NewClient from '../screens/NewClient';
import NewClientPhoto from '../screens/NewClientPhoto';
import Client from '../models/Client';

export type AppStackRoutesParamList = {
  Home: undefined;
  NewClient: undefined;
  NewClientPhoto: {
    idClient?: string;
  };

  ClientDetail: {
    client: Client;
  };
};

const Stack = createNativeStackNavigator<AppStackRoutesParamList>();

const AppRoutes = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewClient" component={NewClient} />
      <Stack.Screen name="NewClientPhoto" component={NewClientPhoto} />

      <Stack.Screen name="ClientDetail" component={ClientDetail} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
