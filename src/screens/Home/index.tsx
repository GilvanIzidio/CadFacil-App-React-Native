import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import ButtonFilled from '../../components/atoms/ButtonFilled';
import Text from '../../components/atoms/Text';
import EmptyContent from '../../components/molecules/EmptyContent';
import ErroConnect from '../../components/molecules/ErroConnect';
import InputWithIcon from '../../components/molecules/InputWithIcon';
import ClientList from '../../components/organism/ClientList';
import Client from '../../models/Client';
import { AppStackRoutesParamList } from '../../routes/index.routes';
import { getAllClients } from '../../services/ClientService';
import { Container, Header, SpacementView, ViewList, Content } from './styles';
import errorHandling from '../../utils/errorHandling';
import useModal from '../../hooks/useModal';
import useDebounce from '../../hooks/useDebounce';

const Home = (): JSX.Element => {
  const [errorConnect, setErrorConnect] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingButtonErrorConnect, setLoadingButtonErrorConnect] = useState(false);
  const [search, setSearch, debouncedValue] = useDebounce('');
  const theme = useTheme();
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackRoutesParamList>>();
  const { openModal } = useModal();

  const getClients = async (name: string) => {
    return getAllClients(name);
  };

  const loadClients = useCallback(async () => {
    try {
      setLoadingPage(true);
      setLoadingButtonErrorConnect(true);
      const data = await getClients(debouncedValue);
      setClients(data);
      setErrorConnect(false);
    } catch (error: any) {
      setErrorConnect(false);
      const { type, message } = errorHandling(error);

      if (type === 'ErrorConnect') {
        setErrorConnect(true);
      } else {
        openModal({
          type: 'danger',
          message,
        });
      }
    } finally {
      setLoadingPage(false);
      setLoadingButtonErrorConnect(false);
    }
  }, [openModal]);

  const filterListByName = useCallback(async (name: string) => {
    try {
      setLoadingList(true);
      const data = await getClients(name);
      setClients([]);
      setClients(data);
    } catch (error: any) {
      setErrorConnect(false);
      const { type, message } = errorHandling(error);

      if (type === 'ErrorConnect') {
        setErrorConnect(true);
      } else {
        openModal({
          type: 'danger',
          message,
        });
      }
    } finally {
      setLoadingList(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadClients();
    }, [loadClients]),
  );

  useEffect(() => {
    filterListByName(debouncedValue);
  }, [debouncedValue, filterListByName]);

  return (
    <Container>
      <Header>
        <Text color={theme.colors.white} size={30}>
          CadFacil
        </Text>
        <Text color={theme.colors.white} size={20}>
          Cadastro de clientes
        </Text>
      </Header>
      <Content>
        {loadingPage && !errorConnect ? (
          <ActivityIndicator size={35} color={theme.colors.primary} />
        ) : (
          <>
            {errorConnect ? (
              <ErroConnect onPress={loadClients} loading={loadingButtonErrorConnect} />
            ) : (
              <>
                <SpacementView>
                  <ButtonFilled onPress={() => navigate('NewClient')}>+ Novo Cliente</ButtonFilled>
                </SpacementView>
                <ViewList>
                  <SpacementView>
                    <InputWithIcon
                      placeholder="Pesquisa por nome"
                      icon={{ name: 'search', size: 25, color: theme.colors.placeholder }}
                      onChangeText={setSearch}
                      value={search}
                    />
                  </SpacementView>
                  {clients.length === 0 ? (
                    <EmptyContent text={`Você não possui clientes \n cadastrados`} />
                  ) : (
                    <>
                      {loadingList ? (
                        <ActivityIndicator size={35} color={theme.colors.primary} />
                      ) : (
                        <ClientList
                          data={clients}
                          onPress={client =>
                            navigate('ClientDetail', {
                              client,
                            })
                          }
                        />
                      )}
                    </>
                  )}
                </ViewList>
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Home;
