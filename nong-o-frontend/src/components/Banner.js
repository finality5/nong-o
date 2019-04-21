import React, {
  memo,
  useCallback,
} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';



//import yellow from '@material-ui/core/colors/yellow';

import benefits from 'data/benefits';
import bgimg from './img/bg.png';


const styles = theme => {
  //const bannerBackground = yellow[100];
  const benefitsBackground = 'rgba(0, 0, 0, 0.75)';

  return {
    banner: {
      height: 'calc(100vh - 64px)',
      backgroundImage: `url(${bgimg})`,
      //color: theme.palette.getContrastText(bannerBackground),
      
    },
    bannerContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    benefits: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 300,
      backgroundColor: benefitsBackground,
      color: theme.palette.getContrastText(benefitsBackground),
    },
    benefit: {
      padding: theme.spacing.unit * 2,
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssRoot: {
      
      backgroundColor: 'rgba(102, 202, 226)',
      '&:hover': {
        backgroundColor: 'rgba(66, 146, 244)',
      },
    },
  }
};

const ipsum = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'

const Banner = memo((props) => {
  const { classes } = props;

  const handleTalkClick = useCallback(() => {
    document.getElementsByClassName('rcw-launcher')[0].click();
  }, []);

  return (
    <div className={classes.banner}>
      <div className={`${classes.bannerContentContainer} container`}>
        
          <Typography variant="h2" color="inherit" align="center" style={{marginTop:20 , fontFamily:"Charmonman"}}>
            ทำไมต้องคุยกับน้องโอ ?
          </Typography>
        
        <Grid container style={{ marginTop: 48 }} className={classes.benefits} justify="center">
          {
            benefits.map(benefit => (
              <Grid item md={6} sm={6} className={classes.benefit} key={benefit}>
                
                <Typography variant="h5" color="inherit" align="center" style={{fontFamily:"Mitr" , fontWeight:100}}>
                  {benefit || ipsum}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
        <div style={{ marginTop: 48 }}>
          <Button variant="contained" color="primary" size="large" onClick={handleTalkClick} className={classNames(classes.margin, classes.cssRoot)}>
            คุยกับน้องโอเลยสิ!
          </Button>
        </div>
        
      </div>
    </div>
  );
});

export default withStyles(styles)(Banner);
