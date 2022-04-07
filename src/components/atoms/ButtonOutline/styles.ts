import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity)`
  width: 332px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 2px;
  border-color: ${props => props.theme.colors.primary};
`;
