const apiUrl = process.env.REACT_APP_API_URL;
const standardQuearyString = `api_key=${process.env.REACT_APP_API_KEY}&format=json`;

export default {
  get: async (query: string) => {
    const response = await fetch(`${apiUrl}/?${query}&${standardQuearyString}`);
    return response.json();
  },
};
