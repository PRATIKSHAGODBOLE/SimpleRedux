const redux = require('redux');
const createStore = redux.createStore;

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

// Store initial data
const initialState = {
  count: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);
console.log('Initial State:', store.getState());

// Subscribe
store.subscribe(() => {
  console.log('Updated State:', store.getState());
});

// Dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
//use command in terminal for output = node index.js