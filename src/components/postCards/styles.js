import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const PostCard = styled.View`
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
`;

export const Container = styled.View`
  padding: 20px 20px 10px 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: justify;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  padding-top: 5px;
`;

export const Author = styled.Text`
  opacity:0.5;
  font-style: italic;
  margin-bottom: 15px;
  padding-top: 2px;
`;

export const UserIcon = styled(IconFontAwesome)`
  font-size: 20px;
  padding-right: 10px;
  color: #3b5998;
`;

export const Body = styled.Text`
  text-align: justify;
`;

