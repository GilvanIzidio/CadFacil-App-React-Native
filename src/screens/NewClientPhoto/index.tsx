import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import ButtonFilled from '../../components/atoms/ButtonFilled';
import Text from '../../components/atoms/Text';
import ClientPhoto from '../../components/organism/ClientPhoto';
import useModal from '../../hooks/useModal';
import { AppStackRoutesParamList } from '../../routes/index.routes';
import { updatePhotoClient } from '../../services/ClientService';
import { Container, Content } from './styles';

const NewClientPhoto = (): JSX.Element => {
  const [image, setImage] = useState<Image>({} as Image);
  const { openModal } = useModal();
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackRoutesParamList>>();

  const getImage = async () => {
    const { openCamera } = ImagePicker;

    const imageRecived = await openCamera({
      width: 300,
      height: 400,
      mediaType: 'photo',
    });
    setImage(imageRecived);

    const formDataImage = new FormData();

    formDataImage.append('file', {
      name: `${Date.now()}.jpg`,
      type: image.mime,
      uri: image.path,
      size: image.size,
    });

    await updatePhotoClient({ file: formDataImage });
  };

  const finalizeRegister = () => {
    openModal({
      type: 'success',
      message: 'Processo concluído com sucesso',
    });
    navigate('Home');
  };

  return (
    <Container>
      <Content>
        <Text
          size={20}
          style={{ textAlign: 'center' }}
        >{`Ao tirar a foto o processo\n já será concluído 😊`}</Text>
        <ClientPhoto onPress={getImage} uri={image.path} />
        <ButtonFilled onPress={finalizeRegister}>Finalizar</ButtonFilled>
      </Content>
    </Container>
  );
};

export default NewClientPhoto;
