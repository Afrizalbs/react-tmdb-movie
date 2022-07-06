import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = "32c2aead43c61f1377eda034b2285b8b";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
