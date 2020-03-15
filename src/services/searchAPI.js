import { APP_KEY, BASE_URL } from '../config/api_config'
import axios from "axios";

const searchAny = async anyContent => {
    const result = await axios.get(
      `${BASE_URL}/search/${anyContent}?api_key=${APP_KEY}`
    )
    const data = result.data
    console.log(data.results);
    return data.results;
  };
  export  default searchAny;