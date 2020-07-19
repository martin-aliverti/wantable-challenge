const API_URL = "https://ws.audioscrobbler.com/2.0";
const standardQuearyString =
  "api_key=7b46939b16b80d20a18f9eaa1166a9e7&format=json";

export default {
  get: async (query: string) => {
    const response = await fetch(
      `${API_URL}/?${query}&${standardQuearyString}`
    );
    return response.json();
  },
};
