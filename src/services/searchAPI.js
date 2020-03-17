import { APP_KEY, BASE_URL } from '../config/api_config'
import axios from "axios";

const searchAny = async (searchQuery,searchType) => {
   console.log("here")
    const searchresults = await axios.get(
      `${BASE_URL}/search/${searchType}?api_key=${APP_KEY}?query=${searchQuery}`
    );

    console.log(searchresults);
    const data = searchresults.data
    console.log(data);
    return data.results;
  }
  export  default searchAny;