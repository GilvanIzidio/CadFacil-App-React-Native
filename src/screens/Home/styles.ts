import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

export const SpacementView = styled.View`
  width: 100%;
  padding-top: 10px;
  align-items: center;
  padding-bottom: 10px;
`;

export const ViewList = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 180px;
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  top: 170px;
  position: absolute;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${props => props.theme.colors.background};
`;
