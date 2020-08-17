import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const Photo = styled.ImageBackground`
  width: 100%;
  height: 400px;
  /* aspect-ratio: 1; */
`;

export const BigPhoto = styled.Image`
  width: 100%;
  height: 400px;
  /* aspect-ratio: 1; */
`;

export const Author = styled.Text`
  opacity:0.5;
  font-style: italic;
  margin-bottom: 15px;
  padding-top: 2px;

`;

export const Container = styled.View`
  flex: 1;
  margin: 15px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const UserIcon = styled(IconFontAwesome)`
  font-size: 20px;
  padding-right: 10px;
  color: #3b5998;
`;

export const Title = styled.Text`

`;