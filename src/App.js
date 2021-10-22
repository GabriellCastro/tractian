import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './_components/Header/index.jsx';
import MachinesAll from './_components/MachinesAll/index.jsx';
import Machine from './_components/Machine/index.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MachinesAll />
          </Route>
          <Route path="/:machine">
            <Machine />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
