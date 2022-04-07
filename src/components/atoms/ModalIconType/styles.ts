import styled from 'styled-components/native';

type ContainerTypeProps = {
  type: 'danger' | 'success';
};

export const Container = styled.View<ContainerTypeProps>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.type === 'success' ? props.theme.colors.success : props.theme.colors.danger};
`;
