const initialState = {
  users: [{ 1: 'teste' }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload.users }
      break;
  }
  return state;
}