import React from 'react';
import { Modal as RNModal } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from '../../atoms/Icon';
import ModalIconType from '../../atoms/ModalIconType';
import Text from '../../atoms/Text';
import { ModalData } from '../../../context/Modal';
import { Overlay, Container, Close, Body } from './styles';

type ModalProps = ModalData & {
  show: boolean;
  close: () => void;
};

const Modal = ({ show, close, message, type }: ModalProps): JSX.Element => {
  const theme = useTheme();
  return (
    <RNModal animationType="fade" transparent visible={show} statusBarTranslucent>
      <Overlay>
        <Container>
          <Close onPress={close}>
            <Icon name="close" size={27} color={theme.colors.gray} />
          </Close>
          <Body>
            <ModalIconType type={type} />
            <Text style={{ textAlign: 'center' }}>{message}</Text>
          </Body>
        </Container>
      </Overlay>
    </RNModal>
  );
};

export default Modal;
