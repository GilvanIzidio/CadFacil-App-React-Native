import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { RNText } from './styles';

type TextProps = RNTextProps & {
  children: React.ReactNode;
  size?: number;
  color?: string;
  family?: string;
};

const Text = ({ children, size, color, family, ...rest }: TextProps): JSX.Element => (
  <RNText {...rest} size={size} color={color} family={family}>
    {children}
  </RNText>
);

export default Text;
