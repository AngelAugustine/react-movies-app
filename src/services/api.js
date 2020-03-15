import { APP_KEY, BASE_URL } from '../config/api_config'
import axios from "axios";

const getMovies = async movieCategory => {
    const result = await axios.get(
      `${BASE_URL}/movie/${movieCategory}?api_key=${APP_KEY}`
    )
    const data = result.data
    console.log(data.results);
    return data.results;
  }

  
  export  default getMovies;
  