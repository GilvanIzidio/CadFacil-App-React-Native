import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Text from '../../atoms/Text';
import { Container, TextInput, ErrorContainer } from './styles';

type InputProps = TextInputProps & {
  placeholder: string;
  error?: string;
};

const Input = ({ placeholder, error, ...rest }: InputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Container isErrored={!!error} isFocused={isFocused}>
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeholder}
          {...rest}
        />
      </Container>
      {error && (
        <ErrorContainer>
          <Text size={12} color={theme.colors.danger}>
            {error}
          </Text>
        </ErrorContainer>
      )}
    </>
  );
};

export default Input;
