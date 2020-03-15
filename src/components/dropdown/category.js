import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


 function Category ({}){
    const [state, setState] = React.useState({
        category: '',
        name: 'popular',
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
return(

                <FormControl variant="outlined"
                //  className={classes.formControl}
                >
                <InputLabel 
                ref={inputLabel} 
                htmlFor="outlined-age-native-simple">
                  Category
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange('category')}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'categoryMovies',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option value="popular">Popular</option>
                  <option value="now_playing">Now Playing</option>
                  <option value="top_rated">Top rated</option>
                  <option value="upcoming">Upcoming</option>
                </Select>
              </FormControl>

)

}
export default Category;