
import { makeStyles } from '@material-ui/core/styles';

import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1, 0),
  }
}));

const TopAppBarLeft = () => {
  const classes = useStyles();

  return (
    <div>
      <LogoWithTitle index = {5} className={classes.margin} />
    </div>
  );
};

export default TopAppBarLeft;
