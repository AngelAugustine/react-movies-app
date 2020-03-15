import { APP_KEY, BASE_URL } from '../config/api_config'
import axios from "axios";


const getShows = async showCategory => {
    const result = await axios.get(
      `${BASE_URL}/tv/${showCategory}?api_key=${APP_KEY}`
    )
    const data = result.data
    console.log(data.results);
    return data.results;
  };

  export  default getShows;