import React, {
  memo,
} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import yellow from '@material-ui/core/colors/yellow';

const styles = theme => {
  const bannerBackground = yellow[100];

  return {
    banner: {
      height: 'calc(100vh - 64px)',
      backgroundColor: bannerBackground,
      color: theme.palette.getContrastText(bannerBackground),
    },
    bannerContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
};

const Banner = memo((props) => {
  const { classes } = props;

  return (
    <div className={classes.banner}>
      <div className={`${classes.bannerContentContainer} container`}>
        <div>
          <Typography variant="h3" color="inherit">
            ทำไมต้องคุยกับน้องโอ ?
          </Typography>
        </div>
        <Grid container style={{ marginTop: 48 }}>
          {
            [...Array(4).keys()].map(() => (
              <Grid item md={3} sm={6} justify="center">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
              </Grid>
            ))
          }
        </Grid>
        <div style={{ marginTop: 48 }}>
          <Button variant="contained" color="primary" size="large">
            คุยกับน้องโอเลยสิ!
          </Button>
        </div>
      </div>
    </div>
  );
});

export default withStyles(styles)(Banner);
