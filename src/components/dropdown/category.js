import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


export default function Category 
({optionValues,
    defaultOptionSelected,
    onOptionChange
})
{
      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);
    
        return (
            <>
                <FormControl variant="outlined" style={{marginTop:'1.5rem', marginBottom:'1.5rem'}}>
                <InputLabel 
                ref={inputLabel} 
                htmlFor="outlined-age-native-simple">
                  Category
                </InputLabel>
                <Select
                  native
                  value={defaultOptionSelected}
                  onChange={onOptionChange}
                  labelWidth={labelWidth}
                >
                    {
                    optionValues.map((option,key)=>(
                        <option key={key} value={option.value}>{option.label}</option>
                    ))}
                  
                </Select>
              </FormControl>
            </>
);
}