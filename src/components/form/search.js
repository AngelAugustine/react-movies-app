import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const getStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '4rem 0'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }))

const Form = props =>  {
  const [state, setState] = React.useState({
    type: '',
    name: 'multi',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    const classes = getStyles()
    return (
        <form className={classes.form}
        //  onSubmit={props.onSubmit}
         >
        <TextField 
        className={classes.textField}
        id="outlined-search" 
        label="Search" 
        type="search" 
        variant="outlined"
        // onChange={e => props.onInputChange(e.target.value)}
         />
        
        <FormControl variant="outlined"
         className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Search Type
        </InputLabel>
        <Select
          native
          value={state.type}
          onChange={handleChange('type')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'type',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="Multi">Multi</option>
          <option value="Movies">Movies</option>
          <option value="Tv">TV</option>
        </Select>
      </FormControl>
        
        <Button variant='outlined' color='primary' className={classes.button} type='submit'>
          Search
        </Button>
      </form> 
    )
}
 
export default Form;