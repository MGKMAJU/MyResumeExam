import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Objective from './components/objective';
import Experience  from './components/experience';
import Education  from './components/education';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Objective"
          component={Objective}
          title="Objective"
          initial
        />
        <Scene
          key="Experience"
          component={Experience}
          title="Experience"
        />
        <Scene
          key="Education"
          component={Education}
          title="Education"
        />
      </Scene>
    </Router>
  );
}

export default App;