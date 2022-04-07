import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
`;

export const Image = styled.Image`
  width: 75px;
  height: 75px;
`;
