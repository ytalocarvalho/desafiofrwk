import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Loading } from './style';
import Photos from '../../components/photos/photos';

function AlbumPhotos(props) {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(2);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber >= parseInt(total)) {
      return;
    }
    if (loading) return;

    setLoading(true);

    const response = await fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${props.route.params.item.id}`);

    const totalItems = await response.headers.get('X-Total-Count');
    const data = await response.json();

    setLoading(false);
    setTotal(totalItems);
    setPage(pageNumber + 10);

    setAlbums(shouldRefresh ? data : [...albums, ...data]);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }


  function renderItem(item) {
    const userName = props.route.params.item.name;
    return (
      <Photos item={item} userName={userName} navigation={props.navigation} />
    )
  };

  return (
    <FlatList
      key="list"
      data={albums}
      keyExtractor={(item, index) => String(index)}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 10,
      }}
      showsVerticalScrollIndicator={false}
      onRefresh={refreshList}
      refreshing={refreshing}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadPage()}
      ListFooterComponent={loading && <Loading />}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}

export default AlbumPhotos;