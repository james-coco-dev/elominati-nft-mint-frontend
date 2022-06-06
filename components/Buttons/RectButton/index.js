import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: props => ({
    cursor: 'pointer',
    borderRadius: 4,
    backgroundColor: props.bg || '#fff',
    color: props.color || '#000',
    padding: theme.spacing(1.25, 3),
    outline: 'none',
    border: 'none',
    fontSize: 18,
    transition: 'all easy-in-out 0.4s',
    '&:hover': {
      backgroundColor: props.bg || '#fff',
      color: props.color || '#000',
      boxShadow: `0 0 2px #fff, 0 0 4px #fff, 0 0 4px ${props.bg}, 0 0 10px #fff,
      0 0 20px ${props.bg}, 0 0 30px ${props.bg}` /* outer right cyan */,
    },
  }),
}));

const RectButton = ({ className, bg = '#fff', color = '#000', ...rest }) => {
  const classes = useStyles({ bg, color });

  return <button className={clsx(classes.root, className)} {...rest} />;
};

export default RectButton;
