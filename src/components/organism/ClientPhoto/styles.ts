import styled from 'styled-components/native';

export const Container = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 120px;
  border: 1px;
  background-color: ${props => props.theme.colors.white};
`;
export const Image = styled.Image`
  flex: 1;
  border-radius: 130px;
`;

export const Button = styled.TouchableOpacity`
  left: 65%;
  width: 70px;
  height: 70px;
  bottom: -20px;
  position: absolute;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;
