import React, { useEffect, useState } from 'react';
import { FlatList, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import UserCard from '../../components/userCards/userCards';

function Users(props) {
  const [feed, setFeed] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      props.setUsers(data);
      setFeed(data);
    }
    loadUsers();
  }, []);

  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  function renderItem(item) {
    return (
      <UserCard item={item} navigation={props.navigation} />
    )
  };

  return (
    <FlatList
      data={feed}
      keyExtractor={user => String(user.id)}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch({ type: 'SET_USERS', payload: { users } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);