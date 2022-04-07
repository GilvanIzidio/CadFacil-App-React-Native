import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import Text from '../Text';
import ButtonProps from '../../../models/ButtonProps';
import { Button } from './styles';

const ButtonFilled = ({
  children,
  textColor,
  onPress,
  loading,
  ...rest
}: ButtonProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Button activeOpacity={0.8} onPress={onPress} {...rest}>
      {loading ? (
        <ActivityIndicator size={25} color={theme.colors.white} />
      ) : (
        <Text color={!textColor ? theme.colors.white : textColor} size={20}>
          {children}
        </Text>
      )}
    </Button>
  );
};

export default ButtonFilled;
