import React from 'react';

import { PostCard, Title, Container, Author, UserIcon, TitleContainer, Body } from './styles';

export default function PostCards({ item }) {
  return (
    <PostCard>
      <Container >
        <Title>{item.title}</Title>
        <TitleContainer >
          <UserIcon name='user' />
          <Author>author: {item.name}</Author>
        </TitleContainer>
        <Body>{item.body}</Body>
      </Container>
    </PostCard>
  );
}
