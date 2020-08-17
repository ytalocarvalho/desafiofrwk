import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Loading } from './style';
import AlbumCards from '../../components/albumCards/albumCards';

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(2);
  const [loading, setLoading] = useState(false);
  const [users] = useState(props.users);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber >= parseInt(total)) {
      return;
    }
    if (loading) return;

    setLoading(true);

    const response = await fetch(`http://jsonplaceholder.typicode.com/albums?_start=${pageNumber - 1}&_limit=10`);

    const totalItems = await response.headers.get('X-Total-Count');
    const data = await response.json();
    const result = getUserNameById(data, users);

    setLoading(false);
    setTotal(totalItems);
    setPage(pageNumber + 10);

    setAlbums(shouldRefresh ? data : [...albums, ...result]);
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
      <AlbumCards item={item} navigation={props.navigation} />
    )
  };

  return (
    <FlatList
      key="list"
      data={albums}
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

export default connect(mapStateToProps)(Albums);