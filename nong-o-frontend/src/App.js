import React, {
  memo,
} from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@livechat/ui-kit'

import theme from 'theme';

import AppBar from 'components/AppBar';
import Home from 'containers/Home';

console.log(theme);

const App = memo(() => (
  <div id="App">
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <Home />
      </MuiThemeProvider>
    </ThemeProvider>
  </div>
));

export default App;
