import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
  height: 500px;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30%;
`;
