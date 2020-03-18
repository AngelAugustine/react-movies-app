import React from 'react';
import Category from '../components/dropdown/category';
import OutlinedCard from '../components/listing/cardContent';
import getMovies from '../services/movieAPI.js'
import Pagination from "../components/containers/pagination";


export class Movies extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            movies:[{value:"popular", label:"Popular"},
                {value:"now_playing", label:"Now Playing"},
                {value:"top_rated", label:"Top rated"},
                {value:"upcoming", label:"Upcoming"}],
                CategoryByDefault:"popular",
                moviesResult:[],
                currentPage:1,
                postsPerPage:10

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
        const { currentPage, postsPerPage,moviesResult}= this.state;
        
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = moviesResult.slice(indexOfFirstPost,indexOfLastPost);
        const paginate= (pageNumber)=>{
            this.setState({
                currentPage:pageNumber
            });
        }
        return(
            <div>
                <Category 
                optionValues={this.state.movies}
                defaultOptionSelected={this.state.CategoryByDefault}
                onOptionChange={this.onOptionChange}
                />

                {
                    currentPosts.map((eachMovie,key)=>(
                        <OutlinedCard 
                        key={key}
                        overview={eachMovie.overview}
                        movieName={eachMovie.original_title}
                        release={eachMovie.release_date}
                        popularity={eachMovie.popularity}
                        imgPath={eachMovie.poster_path}/>  
                    ))
                }

        <Pagination postsPerPage={postsPerPage} totalPosts={moviesResult.length} 
        paginate={paginate} /> 
        
        </div>
        );
    }
}
export default Movies;