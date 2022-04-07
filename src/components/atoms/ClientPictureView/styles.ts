import styled from 'styled-components/native';
import { Image as RNImage } from 'react-native';

export const Image = styled(RNImage)`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: ${props => props.theme.colors.gray};
`;
