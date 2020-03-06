import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AsyncStorage } from '@react-native-community/async-storage';
import { Root } from "native-base";

import Navigator from './src/navigation/index';
import reducer from './src/reducers';
import middleware from './src/middleware';
import setAuthToken from './src/utils/setAuthToken';
import { loadUser } from './src/actions/authedUser';
import { setTopLevelNavigator } from './src/navigation/navigationService';

const store = createStore(reducer, middleware);

getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch {
    return null;
  }
}

if(getToken()) {
  setAuthToken(getToken());
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Root>
      <Provider store={store}>
        <Navigator ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    </Root>
  );
};

export default App;
