import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from '../../components/atoms/Icon';
import PhotoClient from '../../components/atoms/PhotoClient';
import Text from '../../components/atoms/Text';
import Input from '../../components/molecules/Input';
import { Container, Header, Body, FormView } from './styles';
import ButtonFilled from '../../components/atoms/ButtonFilled';
import Client from '../../models/Client';
import { dateMask } from '../../utils/masks';
import { updateClient, deleteClient } from '../../services/ClientService';
import errorHandling from '../../utils/errorHandling';
import useModal from '../../hooks/useModal';
import { AppStackRoutesParamList } from '../../routes/index.routes';
import ErroConnect from '../../components/molecules/ErroConnect';
import ButtonOutline from '../../components/atoms/ButtonOutline';

type ClientDetailProps = NativeStackScreenProps<AppStackRoutesParamList, 'ClientDetail'>;
type FormData = Omit<Client, 'photo'>;

const ClientDetail = ({ route: { params } }: ClientDetailProps): JSX.Element => {
  const theme = useTheme();
  const { openModal } = useModal();
  const [loadingButton, setLoadingButton] = useState(false);
  const [loadingExcludButton, setLoadingExcludButton] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [loadingButtonErrorConnect, setLoadingButtonErrorConnect] = useState(false);
  const [errorConnect, setErrorConnect] = useState(false);
  const formData = useRef({ data: {} as FormData });
  const { goBack, navigate } = useNavigation<NativeStackNavigationProp<AppStackRoutesParamList>>();

  const urlComplete = `${process.env.API_URL}/files/${params.client.photo}`;

  const schema = yup.object({
    client_code: yup.string().required('Obrigatório'),
    name: yup.string().required('Obrigatório'),
    birthday: yup.string().required('Obrigatório').min(10, 'No mínimo 10 caracteres'),
  });

  const { control, handleSubmit, setValue } = useForm<Client>({
    resolver: yupResolver(schema),
  });

  const update = async () => {
    try {
      setLoadingButton(true);
      setLoadingButtonErrorConnect(true);
      if (!formData.current) return;
      await updateClient(formData.current.data);
      setErrorConnect(false);
      openModal({
        type: 'success',
        message: 'Cliente atualizado com sucesso',
      });
      navigate('Home');
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
      setLoadingButton(false);
      setLoadingButtonErrorConnect(false);
    }
  };

  const removeClient = async () => {
    try {
      setLoadingExcludButton(true);
      if (!params.client.id) return;
      await deleteClient(params.client.id);
      openModal({
        type: 'success',
        message: 'Cliente removido com sucesso',
      });
      navigate('Home');
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
      setLoadingExcludButton(false);
    }
  };

  const prepareFormSubmit = ({ name, birthday, client_code, id }: FormData) => {
    formData.current.data = { birthday, client_code, name, id };
    update();
  };

  const recoveryFormData = useCallback(() => {
    const client = params?.client;
    if (!client) return;
    setValue('name', client.name);
    setValue('client_code', client.client_code);
    setValue('birthday', client.birthday);
    setValue('id', client.id);
  }, []);

  useEffect(() => {
    if (params?.client) recoveryFormData();
  }, [recoveryFormData]);

  return (
    <Container>
      {errorConnect ? (
        <ErroConnect
          loading={loadingButtonErrorConnect}
          onPress={() => prepareFormSubmit(formData.current.data)}
        />
      ) : (
        <>
          <Header>
            <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
              <Icon size={30} name="arrow-back" color={theme.colors.black} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setIsEditable(true)}>
              <Text>Editar</Text>
            </TouchableOpacity>
          </Header>
          <ScrollView>
            <Body>
              <PhotoClient uri={urlComplete} />
              <FormView>
                <Controller
                  control={control}
                  name="client_code"
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      editable={isEditable}
                      error={error?.message}
                      placeholder="Codigo cliente"
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      editable={isEditable}
                      error={error?.message}
                      placeholder="Nome"
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="birthday"
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      editable={isEditable}
                      keyboardType="numeric"
                      error={error?.message}
                      placeholder="Data de nascimento"
                      maxLength={10}
                      value={dateMask(value)}
                      onChangeText={onChange}
                    />
                  )}
                />
              </FormView>
              <ButtonFilled
                disabled={!isEditable}
                onPress={handleSubmit(prepareFormSubmit)}
                loading={loadingButton}
              >
                Atualizar
              </ButtonFilled>
              <ButtonOutline
                disabled={!isEditable}
                loading={loadingExcludButton}
                style={{ marginTop: 30 }}
                onPress={removeClient}
              >
                Excluir Cliente
              </ButtonOutline>
            </Body>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default ClientDetail;
