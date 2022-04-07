import styled, { css } from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';

type ContainerProps = {
  isFocused: boolean;
  isErrored: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 332px;
  height: 66px;
  border-radius: 10px;
  border: 1px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1.5px;
      border-color: ${props => props.theme.colors.focusInput};
    `};

  ${({ isErrored }) =>
    isErrored &&
    css`
      border: 1.5px;
      border-color: ${props => props.theme.colors.danger};
    `};
`;

export const TextInput = styled(RNTextInput)`
  flex: 1;
  padding: 10px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fonts.default.size}px;
  font-family: ${props => props.theme.fonts.default.family};
`;

export const ErrorContainer = styled.View`
  width: 332px;
  padding-left: 5px;
`;
