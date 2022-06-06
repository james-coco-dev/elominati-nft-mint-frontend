import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'grid',
    gridTemplateColumns: 'auto 5rem',
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
    background: theme.palette.background.main,
    fontSize: '14px',
  },
  inputView: {
    background: theme.palette.background.default,
    borderTopLeftRadius: theme.spacing(0.75),
    borderBottomLeftRadius: theme.spacing(0.75),
    paddingLeft: theme.spacing(0.75),
  },
  selectView: {
    background: theme.palette.background.paper,
    paddingLeft: theme.spacing(1),
    borderTopRightRadius: theme.spacing(0.75),
    borderBottomRightRadius: theme.spacing(0.75),
  },
  helperText: {
    marginLeft: theme.spacing(1),
  },
}));

const CryptoInput = ({ label, items = [], value, setValue, crypto, setCrypto, helperText }) => {
  const classes = useStyles();

  const handleChange = event => {
    setCrypto(event.target.value);
  };

  const inputChangeHandler = event => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <FormControl className={classes.formControl}>
        <TextField
          className={classes.inputView}
          type='number'
          value={value}
          onChange={inputChangeHandler}
        />
        <Select className={classes.selectView} value={crypto} onChange={handleChange}>
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
    </div>
  );
};

export default CryptoInput;
