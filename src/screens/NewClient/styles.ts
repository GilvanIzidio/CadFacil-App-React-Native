import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  padding-left: 20px;
  justify-content: center;
`;

export const Form = styled.View`
  height: 360px;
  margin-top: 10%;
  justify-content: space-evenly;
  align-items: center;
`;
