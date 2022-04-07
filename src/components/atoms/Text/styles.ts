import styled from 'styled-components/native';
import { Text } from 'react-native';

type RNTextProps = {
  size?: number;
  color?: string;
  family?: string;
};

export const RNText = styled(Text)<RNTextProps>`
  font-size: ${props => props.size || props.theme.fonts.default.size}px;
  color: ${props => props.color || props.theme.fonts.default.color};
  font-family: ${props => props.family || props.theme.fonts.default.family};
`;
