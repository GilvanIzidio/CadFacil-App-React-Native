import styled from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  border: 1px;
  padding-left: 10px;
  border-radius: 5px;
  flex-direction: row;
  border-color: ${props => props.theme.colors.placeholder};
`;

export const ViewIcon = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled(RNTextInput)`
  flex: 1;
  font-size: 15px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.default.family};
`;
