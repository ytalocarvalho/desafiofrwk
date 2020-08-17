import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Loading } from './style';
import PostCards from '../../components/postCards/postCard';

function PostsForUser(props) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(2);
  const [loading, setLoading] = useState(false);
  const [users] = useState(props.users);
  const [userId] = useState(props.route.params.item.id)

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber >= parseInt(total)) {
      return;
    }
    if (loading) return;

    setLoading(true);

    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_start=${pageNumber - 1}&_limit=10&userId=${userId}`);

    const totalItems = await response.headers.get('X-Total-Count');
    const data = await response.json();
    const result = getUserNameById(data, users);

    setLoading(false);
    setTotal(totalItems);
    setPage(pageNumber + 10);

    setPosts(shouldRefresh ? data : [...posts, ...result]);
  }

  function getUserNameById(data, users) {
    return data.reduce((acumulado, item) => {
      users.forEach(usr => {
        if (item.userId === usr.id) {
          acumulado.push({ ...item, name: usr.name })
        }
      });
      return acumulado;
    }, []);
  }

  useEffect(() => {
    loadPage();
  }, []);


  function renderItem(item) {
    return (
      <PostCards item={item} />
    )
  };

  return (
    <FlatList
      key="list"
      data={posts}
      keyExtractor={(item, index) => String(index)}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 20,
      }}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.001}
      onEndReached={() => loadPage()}
      ListFooterComponent={loading && <Loading />}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  }
}

export default connect(mapStateToProps)(PostsForUser);