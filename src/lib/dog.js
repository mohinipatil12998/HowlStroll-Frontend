import axios from "axios";

const API_URL = "https://api.thedogapi.com/v1/";
const API_KEY = "e0b9a5da-41bb-4da9-bd60-73f9e210dc11";

const callAPI = async (url, params = null) => {
  const requestConfig = {
    baseURL: API_URL,
    headers: {
      "x-api-key": API_KEY
    },
    url
  };

  if (params) requestConfig.params = params;

  try {
    return await axios(requestConfig);
  } catch (error) {
    console.log("Axios encountered an error", error);
  }
};

export const fetchBreeds = async (page, count = 10) => {
  const breeds = await callAPI("breeds", {
    limit: count,
    page
  });

  return {
    breeds: breeds.data,
    totalBreeds: breeds.headers["pagination-count"]
  };
};

export const fetchSearchedBreeds = async (breed_ID = "", count = 20) => {
  if (!breed_ID) return [];

  const breeds = await callAPI("images/search", {
    breed_id: breed_ID,
    limit: count
  });

  return breeds.data;
};
