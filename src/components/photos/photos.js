import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Photo, BigPhoto, Author, Container } from './styles';

Icon.loadFont();

export default function Photos(props) {
  const item = props.item;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  })
  function handleAnimate() { }

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Photo source={{ uri: item.thumbnailUrl }} resizeMode='contain' blurRadius={2}>
        {loaded &&
          <BigPhoto
            source={{ uri: item.url }}
            resizeMode='contain'
            onLoadEnd={handleAnimate}
          />
        }
      </Photo>
      <View style={{ flexDirection: 'row', paddingTop: 5 }}>
        <Icon name='user' size={20} style={{ paddingRight: 10 }} color='#3b5998' />
        <Author>Author: {props.userName}</Author>
      </View>
      <Text>{item.title}</Text>
    </View>
  );
}