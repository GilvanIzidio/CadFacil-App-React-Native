import styled from 'styled-components/native';

export const Container = styled.View`
  width: 210px;
  height: 200px;
  border-radius: 110px;
  background-color: ${props => props.theme.colors.placeholder};
`;

export const Image = styled.Image`
  flex: 1;
  border-radius: 110px;
`;
