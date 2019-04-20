import { createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: {
      default: '#f7f7f7',
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
