import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Users from './screens/users/users';
import Posts from './screens/posts/posts';
import Albums from './screens/albums/albums';
import Todos from './screens/todos/todos';
import PostsForUser from './screens/posts/postsForUser';
import AlbumPhotos from './screens/albums/albumPhotos';
import AlbumsForUser from './screens/albums/albumsForUser';
import TodosForUser from './screens/todos/todosForUser';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Icon.loadFont();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Users'

  switch (routeName) {
    case 'Users':
      return 'Users'
    case 'Posts':
      return 'Posts'
    case 'Albums':
      return 'Albums'
    case 'Todos':
      return 'Todos'
  }
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f6b93b',
        style: {
          backgroundColor: '#000',
          paddingTop: 8,
        },
        labelStyle: {
          fontSize: 13,
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          iconName = { 'Users': 'user', 'Posts': 'th-list', 'Albums': 'th-large', 'Todos': 'check-square-o' }[route.name];
          return <Icon name={iconName} color={color} size={size} />
        }
      })}
    >
      <Tab.Screen name='Users' component={Users} />
      <Tab.Screen name='Posts' component={Posts} />
      <Tab.Screen name='Albums' component={Albums} />
      <Tab.Screen name='Todos' component={Todos} />
    </Tab.Navigator>
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }}
        headerMode='float'
      >
        <Stack.Screen
          name='Home'
          component={MainTabNavigator}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route)
          })}
        />
        <Stack.Screen
          name='PostsForUser'
          component={PostsForUser}
          options={{ title: 'Posts' }}
        />
        <Stack.Screen
          name='AlbumPhotos'
          component={AlbumPhotos}
          options={{ title: 'Photos' }}
        />
        <Stack.Screen
          name='AlbumsForUser'
          component={AlbumsForUser}
          options={{ title: 'Albums' }}
        />
        <Stack.Screen
          name='TodosForUser'
          component={TodosForUser}
          options={{ title: 'Todos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;