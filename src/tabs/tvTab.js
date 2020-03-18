import React from 'react';
import Category from '../components/dropdown/category';
import OutlinedCard from '../components/listing/cardContent';
import getShows from '../services/showAPI.js'
import Pagination from "../components/containers/pagination";

export class Tv extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            shows:[{value:"popular", label:"Popular"},
                {value:"airing_today", label:"Airing today"},
                {value:"top_rated", label:"Top rated"},
                {value:"on_the_air", label:"On the Air"}],
                TVCategoryByDefault:"popular",
                showsResult:[],
                currentPage:1,
                postsPerPage:10
        };
    }
    componentDidMount(){
        this.fetchshows(this.state.TVCategoryByDefault);
    }

    fetchshows = TVCategoryByDefault =>{
        
        getShows(TVCategoryByDefault).then(shows =>{
            this.setState({showsResult:shows
            })
        })
    }

    onOptionChange = e =>{
        this.setState({
            TVCategoryByDefault:e.target.value
          });
          this.fetchshows(e.target.value);
    }

    render(){
        const { currentPage, postsPerPage,showsResult}= this.state;
        
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = showsResult.slice(indexOfFirstPost,indexOfLastPost);
        const paginate= (pageNumber)=>{
            this.setState({
                currentPage:pageNumber
            });
        }

        return(
            <div>
                <Category 
                optionValues={this.state.shows}
                defaultOptionSelected={this.state.TVCategoryByDefault}
                onOptionChange={this.onOptionChange}
                />

                {
                    currentPosts.map((eachShow,key)=>(
                        <OutlinedCard 
                        key={key}
                        overview={eachShow.overview}
                        movieName={eachShow.original_title}
                        release={eachShow.release_date}
                        popularity={eachShow.popularity}
                        imgPath={eachShow.poster_path}/>  
                    ))
                }

        <Pagination postsPerPage={postsPerPage} totalPosts={showsResult.length} 
        paginate={paginate} /> 
            </div>
        );
    }
}
export default Tv;