import axios from 'axios';

export const fetchArticles = async () => {
  const baseURL = 'https://newsapi.org/v2/top-headlines';
  const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;
  try {
    const response = await axios.get(baseURL, {
      params: { country: 'us', apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const SearchArticles = async (searchQuery) => {
  const baseURL = 'https://newsapi.org/v2/everything';
  const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY;
  try {
    const response = await axios.get(baseURL, {
      params: { q: searchQuery, apiKey },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
