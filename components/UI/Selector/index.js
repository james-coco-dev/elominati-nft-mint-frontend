import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'grid',
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
    background: theme.palette.background.main,
    fontSize: '14px',
  },
  selectView: {
    background: theme.palette.background.paper,
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(0.75),
  },
  helperText: {
    marginLeft: theme.spacing(1),
  },
}));

const CryptoInput = ({ label, items = [], value, setValue }) => {
  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <FormControl className={classes.formControl}>
        <Select className={classes.selectView} value={value} onChange={handleChange}>
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <FormHelperText className={classes.helperText}>Required</FormHelperText> */}
    </div>
  );
};

export default CryptoInput;
