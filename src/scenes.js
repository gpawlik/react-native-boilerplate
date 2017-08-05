import React from 'react';
import { Actions, Modal, Scene } from 'react-native-router-flux';

import Users from 'containers/Users';

export default Actions.create(
  <Scene overlay>
    <Scene key="modal" component={Modal} hideNavBar initial >
      <Scene key="root">
        <Scene key="users" component={Users} title="Users" />
      </Scene>
    </Scene>
  </Scene>
);
