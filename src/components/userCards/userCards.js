import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';

import {
  UserCard,
  Info,
  Container,
  Values,
  Avatar,
  ExpandContainer,
  MoreInformation,
  Icons,
  ButtonContainer,
  ButtonTouchable,
  MoreInformationText,
  IconText,
  View,
} from './styles';

export default function UserCards({ item, navigation }) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  function renderExpand() {
    return (
      <ExpandContainer>
        <Info style={{ paddingBottom: 10 }}>Adress</Info>
        <Values style={{ fontStyle: 'italic' }}>City: {item.address.city}</Values>
        <Values style={{ fontStyle: 'italic' }}>Street: {item.address.street}</Values>
        <Values style={{ fontStyle: 'italic' }}>Suite: {item.address.suite}</Values>
        <Values style={{ fontStyle: 'italic' }}>Zip Code: {item.address.zipcode}</Values>
      </ExpandContainer>
    )
  };

  function navigateToInfo(screen, item) {
    navigation.navigate(screen, { item });
  }

  return (
    <UserCard>
      <Container>
        <Avatar name="user" />
        <View>
          <Values>
            <Info>Name: </Info>
            {item.name}
          </Values>
          <Values>
            <Info>Email: </Info>
            {item.email}
          </Values>
          <Values>
            <Info>Website: </Info>
            {item.website}
          </Values>
          <Values>
            <Info>Phone: </Info>
            {item.phone}
          </Values>
          <Values>
            <Info>Company: </Info>
            {item.company.name}
          </Values>
        </View>
      </Container>

      <ButtonContainer >
        <ButtonTouchable onPress={() => navigateToInfo('PostsForUser', item)}>
          <Icons name="th-list" />
          <IconText>Posts</IconText>
        </ButtonTouchable>

        <ButtonTouchable onPress={() => navigateToInfo('AlbumsForUser', item)}>
          <Icons name="th-large" />
          <IconText>Albums</IconText>
        </ButtonTouchable>

        <ButtonTouchable onPress={() => navigateToInfo('TodosForUser', item)}>
          <Icons name="check-square-o" />
          <IconText>Todos</IconText>
        </ButtonTouchable>
      </ButtonContainer>

      <MoreInformation onPress={() => toggleExpand()}>
        <MoreInformationText>More informations</MoreInformationText>
      </MoreInformation>

      {expanded &&
        renderExpand()
      }
    </UserCard>
  );
}