import React from 'react';
import Category from '../components/dropdown/category';
import OutlinedCard from '../components/listing/cardContent';


export class Movies extends React.Component{
    
    render(){
        return(
            <div>
                <Category />
                <OutlinedCard />
            </div>
        );
    }
}
export default Movies;