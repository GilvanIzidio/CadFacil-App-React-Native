import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 98%;
  height: 85px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.white};
`;

export const ViewImage = styled.View`
  width: 15%;
  height: 100%;
  align-items: center;
`;

export const Content = styled.View`
  width: 85%;
  height: 100%;
  padding-left: 10px;
`;
