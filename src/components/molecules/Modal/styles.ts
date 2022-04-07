import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 334px;
  height: 320px;
  justify-content: center;
  position: relative;
  padding: 20px 10px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white};
`;

export const Close = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 20px;
  align-items: center;
`;

export const Body = styled.View`
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px 20px;
`;
