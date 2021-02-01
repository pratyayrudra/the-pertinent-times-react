import axios from "axios";

const NYT_API_BASE_URL = "https://api.nytimes.com/svc/";

const nytAxiosInstance = axios.create({
  baseURL: NYT_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  params: {
    "api-key": process.env.REACT_APP_NYT_API_KEY
  },
});

export const nytApi = {
  async get(path) {
    try {
      const response = await nytAxiosInstance.get(path)

      const results = response.data.results

      return results || []
    } catch (err) {
      return []
    }
  }
}