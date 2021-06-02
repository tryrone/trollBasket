import React from 'react';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import BaseReducer from './store';


export default function App() {
  
  return (
    <Provider store={BaseReducer}>
      <AppContainer />
    </Provider>
    );
}

