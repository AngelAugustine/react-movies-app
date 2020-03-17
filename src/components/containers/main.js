import React from 'react';
import FullWidthTabs from '../../tabs/fullWidthTab.js'
import Form from "../form/search.js"
import searchAny from '../../services/searchAPI.js';


class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            searchQuery:'',
            searchType:'multi',
            searchResult:[],
            isloading:false,
            btnPressed:false
        };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchSelectChange = this.onSearchSelectChange.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    }
    
    onInputChange = e =>{
        this.setState({
            searchQuery:e.target.value
          });
        //   this.fetchMovies(e.target.value);
        console.log(this.state.searchQuery);
    }
    onSearchSelectChange = e =>{
        this.setState({
            searchType:e.target.value
          });
        //   this.fetchMovies(e.target.value);
        console.log(this.state.searchType);
    }
    fetchResults = (e) =>{
        console.log(this.state.searchQuery,this.state.searchType);
        // const { searchQuery, searchType } = this.state;
       searchAny(this.state.searchQuery,this.state.searchType)
       .then(result =>{
            this.setState({searchResult:result,
                btnPressed:true
            })
        })
        
        console.log(this.state.searchResult);
        
    }

render(){
    const { searchResult, isloading, btnPressed } = this.state;
  return (
    
    <div className="MainContainer">
      <Form 
      searchQuery={this.state.searchQuery}
      searchType={this.state.searchType}
      onInputChange={this.onInputChange}
      onSearchSelectChange={this.onSearchSelectChange}
      onSubmit={this.fetchResults}
      />
      <FullWidthTabs 
          btnPressed={btnPressed}
          isloading={isloading}
          searchResult={searchResult}
          />
      
    </div>
  );
}
}

export default Main;