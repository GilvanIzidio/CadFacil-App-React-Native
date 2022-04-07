import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from '../../atoms/Icon';
import { Container, ViewIcon, TextInput } from './styles';

type InputWithIconProps = TextInputProps & {
  placeholder: string;
  icon: {
    name: string;
    color: string;
    size: number;
  };
};

const InputWithIcon = ({ placeholder, icon, ...rest }: InputWithIconProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Container>
      <ViewIcon>
        <Icon name={icon.name} size={icon.size} color={icon.color} />
      </ViewIcon>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        {...rest}
      />
    </Container>
  );
};

export default InputWithIcon;
