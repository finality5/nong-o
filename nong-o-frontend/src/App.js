import React, {
  memo,
} from 'react';

import AppBar from 'components/AppBar';
import Home from 'containers/Home';

const App = memo(() => (
  <div id="App">
    <AppBar />
    <Home />
  </div>
));

export default App;
