import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from 'remote-redux-devtools';
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

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const middleware = [thunk];

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;