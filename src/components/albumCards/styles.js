import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const UserCard = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
`;

export const Container = styled.View`
  flex-direction:row;
  align-items:center;
  padding: 20px 20px 10px 10px;
`;

export const Info = styled.Text`
  font-weight: bold;
`;

export const Values = styled.Text`
  font-size: 17px;
`;

export const Avatar = styled(IconFontAwesome)`
  margin: 15px;
  color: #3b5998;
  font-size: 40px;
`;

export const ExpandContainer = styled.View`
  flex: 1;
  background-color:#dcdde1;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px 20px 20px 20px;
`;

export const MoreInformation = styled.TouchableOpacity`
  align-items: center;
  padding-bottom: 10px;
`;

