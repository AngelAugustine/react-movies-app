import React from 'react';
import OutlinedCard from '../components/listing/cardContent';

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
            {btnPressed && searchResult.length===0 ?
            (<div>Sorry No Results Found</div> ): 
            
            (<div>Please Initiate a search</div>)
             }

{ 
        this.props.searchResult.map((eachMovie,key)=>(
                            <OutlinedCard 
                            key={key}
                            overview={eachMovie.overview}
                            movieName={eachMovie.original_title}
                            release={eachMovie.release_date}
                            popularity={eachMovie.popularity}
                            imgPath={eachMovie.poster_path}/>  
                        ))
                    }
            </>
        );
    }
}
