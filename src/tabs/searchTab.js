import React from 'react';
import OutlinedCard from '../components/listing/cardContent';

//Search tab to display search result
export default class SearchTab extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            
        };
    }

    render(){
        const { isLoading, searchResult, btnPressed} = this.props;
        return(
        <>
          {btnPressed && searchResult.length>0 ?
            (searchResult.map((eachMovie,key)=>(
                            <OutlinedCard 
                            key={key}
                            overview={eachMovie.overview}
                            movieName={eachMovie.original_title}
                            release={eachMovie.release_date}
                            popularity={eachMovie.popularity}
                            imgPath={eachMovie.poster_path}/>  
                        ))
            ) :
            (<div>Enter a search</div>)
           }
            </>
        );
    }
}
