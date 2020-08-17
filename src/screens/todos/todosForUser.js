import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Loading } from './styles';
import TodoItem from '../../components/todosItem/todoItem';

import { Container, UserName } from './styles';


function TodosForUser(props) {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(2);
  const [loading, setLoading] = useState(false);
  const [users] = useState(props.users);
  const [userId] = useState(props.route.params.item.id)
  const userName = props.route.params.item.name;


  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber >= parseInt(total)) {
      return;
    }
    if (loading) return;

    setLoading(true);

    const response = await fetch(`http://jsonplaceholder.typicode.com/todos?_start=${pageNumber - 1}&_limit=10&userId=${userId}`);

    const totalItems = await response.headers.get('X-Total-Count');
    const data = await response.json();
    const result = getUserNameById(data, users);
    setLoading(false);
    setTotal(totalItems);
    setPage(pageNumber + 10);

    setTodos(shouldRefresh ? data : [...todos, ...result]);
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
      <TodoItem item={item} navigation={props.navigation} />
    )
  };

  return (
    <Container>
      <UserName>{userName}'s Todos:</UserName>
      <FlatList
        key="list"
        data={todos}
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
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  }
}


export default connect(mapStateToProps)(TodosForUser);