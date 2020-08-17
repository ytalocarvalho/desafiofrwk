import React, { useEffect, useState } from 'react';
import { View, Text, LayoutAnimation, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { UserCard, Info, Container, Values, Avatar, ExpandContainer, MoreInformation } from './styles';

Icon.loadFont();

export default function PostCards(props) {
  const item = props.item;
  function navigateToAlbum() {
    const { item, navigation } = props;
    props.navigation.navigate('AlbumPhotos', { item, navigation })
  }

  return (
    <UserCard onPress={() => navigateToAlbum(item)} >
      <View style={{ margin: 20 }}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name='user' size={20} style={{ paddingRight: 10 }} color='#3b5998' />
            <Text style={{ marginBottom: 10 }}>{item.name}'s Album</Text>
          </View>
          <Text style={{ fontWeight: 'bold' }}>Title: {item.title}</Text>
        </View>
      </View>
    </ UserCard >
  );
}