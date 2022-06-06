import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    padding: props => props.padding || theme.spacing(2.5),
    // backgroundImage: 'url(/img/illustrations/corner-1.png)',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'right',
    borderRadius: '0.375rem',
    boxShadow: theme.shadows[3],
    height: '100%',
    overflow: 'auto',
    // box-shadow: 0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%);
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
}));

const GreyCard = ({ title, children, className, ...rest }) => {
  const classes = useStyles({ ...rest });
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Typography className={classes.title} variant='h6' color='textSecondary' gutterBottom>
        {title}
      </Typography>
      {children}
    </Card>
  );
};

export default GreyCard;
