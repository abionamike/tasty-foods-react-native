import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const signInreducer = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  signIn: signInreducer,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;