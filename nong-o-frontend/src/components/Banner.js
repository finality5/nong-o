import React, {
  memo,
} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import yellow from '@material-ui/core/colors/yellow';

const styles = theme => {
  const bannerBackground = yellow[100];

  return {
    banner: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 64px)',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bannerBackground,
      color: theme.palette.getContrastText(bannerBackground),
    },
  }
};

const Banner = memo((props) => {
  const { classes } = props;

  return (
    <div className={classes.banner}>
      <div>
        <Typography variant="h3" color="inherit">
          ทำไมต้องคุยกับน้องโอ ?
        </Typography>
      </div>
      <div style={{ marginTop: 40 }}>
        <Button variant="contained" color="primary" size="large">
          คุยกับน้องโอเลยสิ!
        </Button>
      </div>
    </div>
  );
});

export default withStyles(styles)(Banner);
