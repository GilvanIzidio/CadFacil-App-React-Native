import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type IconProps = {
  name: string;
  size: number;
  color: string;
};

const Icon = ({ name, size, color }: IconProps): JSX.Element => {
  return <MaterialIcon name={name} size={size} color={color} />;
};

export default Icon;
