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
            {/* {btnPressed && searchResult.length===0 ?
            (<div>Sorry No Results Found</div> ): 
            (<div>Please Enter a search</div> )
             } */}

{ 
        searchResult.map((eachMovie,key)=>(
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


// export default function SearchTab ({

// }) {
//     return(
//         <div className="searchResultContainer">
            
//             <div className="commandDiv">
//             Please enter a search
//           </div>
//           {
//                     this.state.moviesResult.map((eachMovie,key)=>(
//                         <OutlinedCard 
//                         key={key}
//                         overview={eachMovie.overview}
//                         movieName={eachMovie.original_title}
//                         release={eachMovie.release_date}
//                         popularity={eachMovie.popularity}
//                         imgPath={eachMovie.poster_path}/>  
//                     ))
//                 }
//         </div>
//     );
// }
