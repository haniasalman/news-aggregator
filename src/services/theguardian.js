import axios from 'axios';

const fetchGuardianArticles = async () => {
  const baseURL = 'https://content.guardianapis.com/search';
  const apiKey = process.env.REACT_APP_THEGUARDIAN_API_KEY;
  try {
    const response = await axios.get(baseURL, {
      params: { 'api-key': apiKey },
    });
    return response.data.response.results;
  } catch (error) {
    console.error('Error fetching articles from Guardian API:', error);
    return [];
  }
};

export default fetchGuardianArticles;
