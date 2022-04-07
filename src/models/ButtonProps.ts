import { TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  textColor?: string;
  onPress: () => void;
  loading?: boolean;
};

export default ButtonProps;
