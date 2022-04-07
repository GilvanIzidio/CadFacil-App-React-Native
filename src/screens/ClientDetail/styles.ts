import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const FormView = styled.View`
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
