import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export const TodoTouchable = styled.TouchableHighlight`
  flex-direction: row;
  margin: 15px;
  border-radius: 20px;
  padding: 10px;
`;

export const CheckBox = styled(IconFontAwesome)`
  font-size: 27px;
`;

export const Title = styled.Text`
  font-size: 17px;
  margin-right: 12px;
  margin-left: 12px;
`;
