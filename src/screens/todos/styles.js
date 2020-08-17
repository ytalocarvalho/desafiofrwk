import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

export const Container = styled.View`
`;

export const UserName = styled.Text`
  margin: 20px;
  font-size: 16px;
`;