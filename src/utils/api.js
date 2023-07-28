import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API = import.meta.env.VITE_APP_MOVIE_API;

const headers = {
  Authorization: "bearer " + API,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
