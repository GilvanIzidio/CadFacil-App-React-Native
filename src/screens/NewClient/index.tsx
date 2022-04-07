import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from '../../components/atoms/Icon';
import Client from '../../models/Client';
import Input from '../../components/molecules/Input';
import { dateMask } from '../../utils/masks';
import { AppStackRoutesParamList } from '../../routes/index.routes';
import useModal from '../../hooks/useModal';
import { createClient } from '../../services/ClientService';
import errorHandling from '../../utils/errorHandling';
import ButtonFilled from '../../components/atoms/ButtonFilled';
import { Container, Header, Form } from './styles';
import Text from '../../components/atoms/Text';
import ErroConnect from '../../components/molecules/ErroConnect';

type FormData = Omit<Client, 'photo'>;

const NewClient = (): JSX.Element => {
  const { goBack, navigate } = useNavigation<NativeStackNavigationProp<AppStackRoutesParamList>>();
  const theme = useTheme();
  const formData = useRef({ data: {} as FormData });

  const { openModal } = useModal();
  const [loadingButton, setLoadingButton] = useState(false);
  const [loadingButtonErrorConnect, setLoadingButtonErrorConnect] = useState(false);
  const [errorConnect, setErrorConnect] = useState(false);

  const schema = yup.object({
    client_code: yup.string().required('Obrigatório'),
    name: yup.string().required('Obrigatório'),
    birthday: yup.string().required('Obrigatório').min(10, 'No mínimo 10 caracteres'),
  });

  const save = async () => {
    try {
      setLoadingButton(true);
      setLoadingButtonErrorConnect(true);
      if (!formData.current) return;
      const createdClient = await createClient(formData.current.data);
      setErrorConnect(false);
      navigate('NewClientPhoto', {
        idClient: createdClient.id,
      });
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

  const { control, handleSubmit } = useForm<Client>({
    resolver: yupResolver(schema),
  });

  const prepareFormSubmit = ({ name, birthday, client_code, id }: FormData) => {
    formData.current.data = { birthday, client_code, name, id };
    save();
  };

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
          </Header>
          <View>
            <Text
              style={{ textAlign: 'center' }}
              size={25}
            >{`Informe os dados\npara continuar`}</Text>
          </View>
          <Form>
            <Controller
              control={control}
              name="client_code"
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Input
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
                  keyboardType="numeric"
                  error={error?.message}
                  placeholder="Data de nascimento"
                  maxLength={10}
                  value={dateMask(value)}
                  onChangeText={onChange}
                />
              )}
            />
            <ButtonFilled onPress={handleSubmit(prepareFormSubmit)} loading={loadingButton}>
              Próximo
            </ButtonFilled>
          </Form>
        </>
      )}
    </Container>
  );
};

export default NewClient;
