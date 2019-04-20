import React, {
  memo,
} from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

import AppBar from 'components/AppBar';
import Home from 'containers/Home';

console.log(theme);

const App = memo(() => (
  <div id="App">
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <Home />
    </MuiThemeProvider>
  </div>
));

export default App;