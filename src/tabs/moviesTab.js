import React from 'react';
import Category from '../components/dropdown/category';
import OutlinedCard from '../components/listing/cardContent';
import getMovies from '../services/api.js'

export class Movies extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            movies:[{value:"popular", label:"Popular"},
                {value:"now_playing", label:"Now Playing"},
                {value:"top_rated", label:"Top rated"},
                {value:"upcoming", label:"Upcoming"}],
                CategoryByDefault:"popular",
                moviesResult:[]
        };
    }
    componentDidMount(){
        this.fetchMovies(this.state.CategoryByDefault);
    }

    fetchMovies = CategoryByDefault =>{
        
        getMovies(CategoryByDefault).then(movies =>{
            this.setState({moviesResult:movies
            })
        })
    }

    onOptionChange = e =>{
        this.setState({
            CategoryByDefault:e.target.value
          });
          this.fetchMovies(e.target.value);
    }

    render(){

        return(
            <div>
                <Category 
                optionValues={this.state.movies}
                defaultOptionSelected={this.state.CategoryByDefault}
                onOptionChange={this.onOptionChange}
                />

                {
                    this.state.moviesResult.map((eachMovie,key)=>(
                        <OutlinedCard 
                        key={key}
                        overview={eachMovie.overview}
                        movieName={eachMovie.original_title}
                        release={eachMovie.release_date}
                        popularity={eachMovie.popularity}
                        imgPath={eachMovie.poster_path}/>  
                    ))
                }
                
            </div>
        );
    }
}
export default Movies;