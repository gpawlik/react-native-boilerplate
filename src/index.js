import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import { Router } from 'react-native-router-flux';

import store from './store';
import scenes from './scenes';

/* Allow XHR requests in devtools */
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3
});

class reactNativeBoilerplate extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} getSceneStyle={getSceneStyle} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeBoilerplate', () => reactNativeBoilerplate);
