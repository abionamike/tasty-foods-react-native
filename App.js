import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import AppRoot from './AppRoot';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppRoot />
    </ReduxProvider>
  );
}

    